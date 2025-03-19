<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TranslationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Property;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\PropertyController;

Route::resource('properties', PropertyController::class);

Route::get('/lang/{locale}', [TranslationController::class, 'changeLanguage'])->name('language.change');

Route::post('/user/language', function (Request $request) {
    $request->validate([
        'language' => 'required|in:en,tr,ru',
    ]);

    $user = Auth::user();
    $user->update(['preferred_language' => $request->language]);

    return back();
})->middleware(['auth']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function (Request $request) {
    $user = Auth::user();
    $locale = $user->preferred_language ?? 'tr';

    $properties = Property::with(['translations' => function ($query) use ($locale) {
        $query->where('locale', $locale);
    }])->get();

    return Inertia::render('Dashboard', [
        'properties' => $properties,
        'user_language' => $locale,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Test');
})->middleware(['auth', 'verified', AdminMiddleware::class])->name('test');


require __DIR__.'/auth.php';
