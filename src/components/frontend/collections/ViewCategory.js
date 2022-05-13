import React, {useState, useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

function ViewCategory() {

       const [loading, setLoading] = useState(true);
const [category, setCategory] = useState([]);

useEffect(() => {
  

axios.get(`/api/getCategory`).then(res=>{

if(res.data.status === 200)
{
    //console.log(res.data.category);

    setCategory(res.data.category);
setLoading(false);

}

});

} );

if(loading)
{return <h4>Loadig categories...</h4>
}

else
{

var showCategoryList = '';
showCategoryList = category.map((item, idx) =>{

return (

<div className="col-md-4" key={idx}>

<div className="card">

<Link to=" ">

<img src="" className="w-100" alt={item.name} />

</Link>

<div className="card-body">

    <h6>{item.slug}</h6>
<Link to={`collections/${item.slug}`}>
<h6>{item.name}</h6>
</Link>


</div>

</div>

    </div>

)

})

}

  return (


      <div>
    <div className="py-3 bg-warning">

<div className="container">

<h6>Category page</h6>

</div>

    </div>


    <div className="py-3 ">

<div className="container">



<div className="row">

{showCategoryList}

</div>

</div>

    </div>


</div>

  )
}

export default ViewCategory


/*import React ,{useState, useEffect} from 'react';

import axios from 'axios';
import swal from 'sweetalert';

function ViewCategory() {


    const [loading, setLoading] = useState(true);
const [category, setCategory] = useState([]);


useEffect(() => {
  
axios.get(`/api/getCategory`).then(res=>{

if(res.data.status === 200)
{

//console.log(res.data.category);

setCategory(res.data.category);
setLoading(false);

}

});

});


if(loading)
{
    return <h4>Loading category...</h4>
}

else{

    var showCategoryList = '';
    showCategoryList = category.map( (item, idx) =>{

return (

    <div className="col-md-4" key={idx}>

    <div className="card">
    
<div className="card-body">

<h6>{item.name}</h6>

</div>

    </div>
    
        </div>

)

    } );

}


  return (

      <div>
    <div className="py-3 bg-warning">

<div className="container">

<h6>Category page</h6>
</div>

    </div>

    <div className="py-3 ">

<div className="container">

    <div className="row">

    {showCategoryList}

    </div>

</div>

    </div>


    </div>
  )
}

export default ViewCategory

*/