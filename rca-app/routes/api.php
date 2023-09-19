<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\AuthController;
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

Route::group(["middleware" => 'auth:sanctum'], function(){

 Route::prefix('offer')->group(function () {
        Route::post('/create', [OfferController::class, 'storeOffer']);
        Route::get('/', [OfferController::class, 'getOffers']);
        Route::get('/profile', [OfferController::class, 'getProfile']);
        Route::get('/profile/offer/{profileId}', [OfferController::class, 'getProfileOffer']);
    });

    Route::get('/user', [AuthController::class, 'getUser']);
   Route::post('/logout', [AuthController::class, 'logoutUser']);
});


// Auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'createUser']);
    Route::post('/login', [AuthController::class, 'loginUser']);
});

 