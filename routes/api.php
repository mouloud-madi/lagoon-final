<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\{
    ContactController,
    GalleryController,
    ServiceController,
    SliderController,
    InfoController,
};


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/slider', [SliderController::class, 'index']);
Route::post('/contact', [ContactController::class, 'contact']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/category', [GalleryController::class, 'category']);
Route::get('/service', [ServiceController::class, 'index']);
Route::get('/info', [InfoController::class, 'index']);
