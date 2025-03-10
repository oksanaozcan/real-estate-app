<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    return Inertia::render('Home', [
        'user' => auth()->user(),
    ]);
});

Route::middleware([AdminMiddleware::class, 'auth:sanctum'])->group(function () {
    Route::get('/admin', function () {
        return 'Hello Admin';
    });
});
