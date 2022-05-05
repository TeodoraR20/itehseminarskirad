
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';

import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';

import Register from './components/frontend/auth/Register';


function App() {



 
  return ( 
    <div className="App">


<BrowserRouter>

<Switch>

<Route exact  path="/" component={Home}/>

<Route   path="/login" component={Login }/>

<Route  path="/register" component={Register }/>

<Route path="/admin" name="Admin" render={(props)  => <MasterLayout {...props}/>}  />
{/*
<Route exact path="/admin" component={MasterLayout}/>

<Route exact path="/admin/dashboard" component={Dashboard}/>

<Route exact path="/admin/profile" component={Profile}/>
*/}</Switch>

</BrowserRouter>
   
    </div>
  );
}

export default App;
