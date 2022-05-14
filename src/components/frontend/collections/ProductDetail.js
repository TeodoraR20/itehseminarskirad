import React, {useState, useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

function ProductDetail(props) {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    
const [quantity, setQuantity] = useState(1);
  




useEffect(() => {

    let isMounted = true;
//vracanje podataka
//category se odnosi na slug
const category_slug = props.match.params.category;
//produc se odnosi na product slug
const product_slug = props.match.params.product;

axios.get(`/api/viewproductdetail/${category_slug}/${product_slug}`).then(res=>{
if(isMounted)
{
    if(res.data.status === 200)
    {

        //console.log(res.data.product_data.product);
setProduct(res.data.product);
//setCategory(res.data.product_data.category);
setLoading(false);

    }



else if(res.data.status === 404)
{

//history.push('/collections')
swal('Warning',res.data.message,"error");

}

}


});



    return () => {

isMounted = false;

    };
  
}, [props.match.params.category, props.match.params.product]);


const handleDecrement = () => {
    if(quantity > 1){

setQuantity(prevCount => prevCount - 1);

    }
}

const handleIncrement = () => {

    if(quantity < 10){
    setQuantity(prevCount => prevCount + 1);
    }
    
    }

const submitAddtocart = (e) => {

e.preventDefault();

const data = {

product_id: product.id,
product_quantity: quantity,


}

axios.post(`/api/add-to-cart`,data).then(res=> {

if(res.data.status === 201)
{

swal("Success", res.data.message,"success");

}

else if(res.data.status === 409)
{
    swal("Warning", res.data.message,"warning");

}

else if(res.data.status === 401)
{

swal("Error",res.data.message,"error");

}

else if(res.data.status === 404)
{

swal("Warning",res.data.message,"warning");

}

});


}

if(loading)
{

return <h4>Loading product detail...</h4>

}

else 
{

    var avail_stock = '';

    if(product.quantity > 0) {
    avail_stock = <div>

<label className="btn-sm btn-success px-4 mt-2">In stock</label>

<div className="row">

<div className="col-md-3 mt-3">

<div className="input-group">

<button type="button" onClick = {handleDecrement} className="input-group-text">-</button>



<div  className="form-control text-center" >{quantity}</div>

<button type="button" onClick = {handleIncrement} className="input-group-text">+</button>



</div>

</div>

<div className="col-md-3 mt-3">

<button type="button" onClick={submitAddtocart} className="btn btn-primary w-10">Add to cart</button>

</div>

</div>

    </div>
}

else
{

    avail_stock = <div>

    <label className="btn-sm btn-danger px-4 mt-2">Out of stock</label>

</div>
}
}


  return (
    <div>

<div className="py-3 bg-warning">

<div className="container">

<h6>Collections  / {product.category.name} / {product.name}</h6>

</div>

    </div>


    <div className="py-3 ">

<div className="container">



<div className="row">
<div className="col-md-4 border-end">

<img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-100"/>

</div>

<div className="col-md-8">
<h4>
    {product.name}
    <span className="float-end badge btn-sm btn-danger badge-pil">{product.brand}</span>
</h4>

<p>{product.description}</p>
<h4 className="mb-1">

Rs: {product.selling_price}

<s className="ms-2">{product.original_price}</s>

</h4>

<div>
{/*
<label className="btn-sm btn-success px-4 mt-2">In stock</label>

<div className="row">

<div className="col-md-3 mt-3">

<div className="input-group">

<button type="button" className="input-group-text">-</button>

<input type="text" className="form-control text-center" value="1" />

<button type="button" className="input-group-text">+</button>



</div>

</div>

<div className="col-md-3 mt-3">

<button type="button" className="btn btn-primary w-10">Add to cart</button>

</div>

</div>
  */}

  {avail_stock}
</div>
<br />
<button type="button" className="btn btn-danger w-10">Add to wishlist</button>
</div>
</div>

</div>
</div>

    </div>
  )
}

export default ProductDetail