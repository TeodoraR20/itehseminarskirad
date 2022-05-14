<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Cart;
use App\Model\Product;
use App\Model\User;

class CartController extends Controller
{
    //

    public function addtocart(Request $request)
    {

if(auth('sanctum')->check())
{

    $user_id = auth('sanctum')->user()->id;
$product_id = $request->product_id;
$product_quantity = $request->product_quantity;

$productCheck = Product::where('id', $product_id)->first();

if($productCheck)
{

if(Cart::where('product_id', $product_id)->where('user_id', $user_id)-exists())
{
    return response()->json([

        'status'=>409,
        'message'=>$productCheck->name. 'Already inserted'
        
        ]);

}

else{

    //dodavanje proizvoda
$cartItem = new Cart;
$cartItem->user_id = $user_id;
$cartItem->product_id =  $product_id;
$cartItem->product_quantity = $product_quantity;

$cartItem->save();

    return response()->json([

        'status'=>201,
        'message'=>'Added to cart'
        
        ]);


}

}

else{

    return response()->json([

        'status'=>404,
        'message'=>'Product not found'
        
        ]);




}
}

else{

return response()->json([

'status'=>401,
'message'=> 'Login to add to cart'
]);

}


    }

    
}
