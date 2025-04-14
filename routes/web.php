<?php

use App\Http\Controllers\Admin\AdminPageController;
use App\Http\Controllers\Admin\ImageUploadController;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataToolsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\CookieConsentController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\AssignVisitorRole;
use Illuminate\Support\Facades\Route;

Route::get('/lang/{locale}', [TranslationController::class, 'changeLanguage'])->name('language.change');
Route::get('/accept-cookie/{consent}', [CookieConsentController::class, 'index'])->name('accept.cookie');

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'welcome')->name('home');
    Route::get('properties', 'properties')->name('properties');
    Route::get('categories/{slug}', 'category')->name('category.show');
    Route::get('privacy-policy', 'privacyPolicy')->name('privacy.policy');
})->middleware([AssignVisitorRole::class]);

Route::get('/data-tools', [DataToolsController::class, 'index'])
    ->middleware([AssignVisitorRole::class])
    ->name('data.tools');

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
