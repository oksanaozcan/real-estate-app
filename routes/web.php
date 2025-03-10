<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    return view ('app');
});

Route::middleware([AdminMiddleware::class, 'auth:sanctum'])->group(function () {
    Route::get('/admin', function () {
        return 'Hello Admin';
    });
});
