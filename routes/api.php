<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\FrontendController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register',[AuthController::class, 'register']);

Route::post('login',[AuthController::class, 'login']);


Route::get('getCategory',[FrontendController::class,'category']);

Route::get('fetchproduct/{slug}',[FrontendController::class,'product']);


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){

    Route::get('/checkingAuthenticated',function(){

return response()->json(['message'=>'You are in.','status'=>200],200);

    });
 //Category

 //Route::post('/admin/category',[CategoryController::class,'store']);

Route::get('view-category',[CategoryController::class,'view']);

 Route::post('store-category',[CategoryController::class,'store']);

Route::get('edit-category/{id}',[CategoryController::class,'edit']);

Route::put('update-category/{id}',[CategoryController::class,'update']);


Route::delete('delete-category/{id}',[CategoryController::class,'destroy']);

//vrati sve kategorije proizvoda

Route::get('all-category',[CategoryController::class,'allcategory']);
//product

Route::post('store-product',[ProductController::class,'store']);

Route::get('view-product',[ProductController::class, 'view']);

Route::get('edit-product/{id}',[ProductController::class,'edit']);

Route::post('update-product/{id}',[ProductController::class,'update']);

});



    Route::middleware(['auth:sanctum'])->group(function(){

      

Route::post('logout',[AuthController::class,'logout']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//public routes



