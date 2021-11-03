<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    HomeController,
    ServiceController,
    CategoryController,
    LagoonController,
    GalleryController,
    AccountController,
    SliderController,
    SectionController
};

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about-us', function () {
    return view('welcome');
});
Route::get('/gallery', function () {
    return view('welcome');
});
Route::get('/contact-us', function () {
    return view('welcome');
});
Route::get('/our-services', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {
    Auth::routes([
        'register' => false,
        'reset' => false,
    ]);
});

Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::resource('/service', ServiceController::class);
    Route::get('/section', [SectionController::class,'index'])->name('section.index');
    Route::post('/section', [SectionController::class,'update'])->name('section.update');
    Route::resource('/category', CategoryController::class);
    Route::resource('/gallery', GalleryController::class);
    Route::resource('/slider', SliderController::class);
    Route::get('/lagoon-design', [LagoonController::class, 'index'])->name('lagoon-design.index');
    Route::post('/lagoon-design', [LagoonController::class, 'update'])->name('lagoon-design.update');
    Route::get('/my-account', [AccountController::class, 'index'])->name('account.index');
    Route::post('/account', [AccountController::class, 'updateAccount'])->name('account.update');
    Route::post('/password', [AccountController::class, 'updatePassword'])->name('password.update');
});


