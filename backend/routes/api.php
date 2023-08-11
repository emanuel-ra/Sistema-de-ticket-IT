<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthenticationController as v1Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * *  V1 ROUTES 
*/
Route::prefix('vi')->group(function(){

    /**
     * * FREE ROUTES
     */
     // * AUTHENTICATION
    Route::prefix('auth')->group(function(){
        Route::post('login',[v1Auth::class,'login']);
    });

    // * TICKETS FROM CLIENT SIDE
    Route::prefix('tickets')->group(function(){
        //Route::post('request',[v1Auth::class,'store']);
    });


     /**
      * * PROTECTED ROUTES
      */    
    Route::middleware('auth:sanctum')->group(function(){

        // AUTH
        Route::prefix('auth')->group(function(){
            Route::post('logout',[App\Http\Controllers\Api\AuthController::class,'logout']);
        });

        // TICKETS
        Route::prefix('admin')->group(function(){
            
            Route::prefix('tickets')->group(function(){

            });
            
        });
    });
    
});

