<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthenticationController as v1Auth;
use App\Http\Controllers\Api\V1\Catalogues\BranchController as v1Brach;
use App\Http\Controllers\Api\V1\Catalogues\DepartmentController as v1Department;
use App\Http\Controllers\Api\V1\Catalogues\SupportTypeController as v1SupportType;
use App\Http\Controllers\Api\V1\Client\SupportTickets as v1ClientSupportTickets;
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
Route::prefix('v1')->group(function(){

    /**
     * * FREE ROUTES
     */
     // * AUTHENTICATION
    Route::prefix('auth')->group(function(){
        Route::post('login',[v1Auth::class,'login']);
    });

    // * CATALOGUES FROM CLIENT SIDE
    Route::prefix('catalogues')->group(function(){
        // * GET BRANCHES
        Route::get('Branches',[v1Brach::class,'Get']);
        // * GET DEPARTMENTS
        Route::get('Departments',[v1Department::class,'Get']);
        // * GET SUPPORT TYPES
        Route::get('Support/types',[v1SupportType::class,'Get']);
    });

    // * TICKETS FROM CLIENT SIDE
    Route::prefix('tickets')->group(function(){
        Route::post('request',[v1ClientSupportTickets::class,'store']);
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

