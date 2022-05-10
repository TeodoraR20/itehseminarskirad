import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import MasterLayout from './layouts/admin/MasterLayout';
import {useEffect, useState} from 'react'
import axios from 'axios';

function AdminPrivateRoute({...rest}) {
const [Authenticated, setAuthenticated] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get('/api/checkingAuthenticated').then(res=>{

if(res.status === 200)
{
    setAuthenticated(true);
}

setLoading(false);
    });
    

  return () => {
    setAuthenticated(false);
  }
}, []);

if(loading)
{
    return <h1>Loading...</h1>
}


 return (

<Route  {...rest}

render = { ({props, location}) =>

Authenticated ?
(<MasterLayout {...props}/>) :
(<Redirect to={{pathname: "/login", state:{from: location}}} />)


} 




/>

 );


}



export default AdminPrivateRoute;


