<?php

use Illuminate\Support\Facades\Route;

use App\Http\Middleware\AdminMiddleware;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TranslationController;

use App\Http\Controllers\Admin\AdminPageController;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\Admin\ImageUploadController;

Route::get('/lang/{locale}', [TranslationController::class, 'changeLanguage'])->name('language.change');

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'welcome')->name('home');
    Route::get('properties', 'properties')->name('properties');
    Route::get('categories/{slug}', 'category')->name('category.show');
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/user/language', [ProfileController::class, 'updatePreferredLang']);
});

Route::middleware(['auth', 'verified', AdminMiddleware::class])->group(function () {
    Route::prefix('admin')->group(function () {

        Route::controller(AdminPageController::class)->group(function () {
            Route::get('/', 'dashboard')->name('admin.dashboard');
        });

        Route::post('/upload-image', [ImageUploadController::class, 'upload'])->name('image.upload');
        Route::delete('/delete-image/{path}', [ImageUploadController::class, 'delete'])->where('path', '.*')->name('admin.delete-image');

        Route::resource('properties', PropertyController::class);
    });
});

require __DIR__.'/auth.php';
