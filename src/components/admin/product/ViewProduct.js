import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewProduct() {

    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

useEffect(() => {
  
    document.title = "View product";

axios.get('/api/view-product').then(res =>{

if(res.data.status === 200)
{
//console.log(res.data.products);

setProduct(res.data.products);
setLoading(false);

}

});

}, []);


var display_Productdata = '';

if(loading)
{
return <h4>View products loading...</h4>

}

else 
{
    display_Productdata = viewProduct.map((item) => {

return (

<tr key={item.id}>

<td >  {item.id} </td>
<td >  {item.category.name} </td>
<td >  {item.name} </td>
<td >  {item.selling_price} </td>
<td > <img  src = {`http://localhost:8000/${item.image}`} width="50px" alt={item.name}/>  </td>
<td>  <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link> </td>

<td>  <button type="button" className="btn btn-danger btn-sm">Delete</button> </td>

</tr>

)

})
}

  return (
    <div className="card px-4 mt-3">

<div className="card-header">

<h4>View product</h4>

<Link to="/admin/store-product" className="btn btn-primary btn-sm float-end">Add product</Link>

</div>

<div className="card-body">

<div className="table-responsive">

<table className="table table-bordered table-striped">

<thead>

<tr>
<th>ID</th>
<th>Category name</th>
<th>Product name</th>
<th>Selling price</th>
<th>Image</th>
<th>Edit</th>
<th>Delete</th>

</tr>

</thead>


<tbody>
{display_Productdata}


</tbody>

</table>

</div>

</div>


    </div>
  )
}

export default ViewProduct