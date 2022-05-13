import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import routes from '../../routes/Publicroutelist';

import {Switch, Route} from 'react-router-dom';
import Publicrouteslist from '../../routes/Publicroutelist';


 const FrontendLayout = () =>{

return (

<div >

<Navbar />

                <div >


<Switch>
    {





  Publicrouteslist.map((routedata, idx)=>{

    return (

    routedata .component && (

<Route key={idx}
 path ={routedata.path}
 name={routedata.name}
 exact={routedata.exact}
 render={(props)=>(

<routedata.component {...props} />

 )}
 />

)

)

})

    }
    
   
    
    </Switch>
  



                {/*    <Footer /> */}

                    </div>

                </div>



);

 }

export default FrontendLayout;
