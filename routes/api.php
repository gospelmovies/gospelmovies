<?php

use App\Http\Controllers\Admin\AdminAuthentication;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('videos', [PostController::class, 'index']);


Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function () {
    Route::post('login', [AdminAuthentication::class, 'login']);
    Route::get('/profile', [ProfileController::class, 'index'])->middleware('auth:admin');
    Route::post('post', [PostController::class, 'store'])->middleware('auth:admin');
});
