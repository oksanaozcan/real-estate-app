<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class TranslationController extends Controller
{
    public function changeLanguage($locale)
    {
        if (!in_array($locale, ['en', 'tr', 'ru'])) {
            return response()->json(['error' => 'Invalid locale'], 400);
        }

        session(['locale' => $locale]);
        App::setLocale($locale);

        $cookie = cookie('lang', $locale, 43200);

        if (Auth::check()) {
            $user = Auth::user();
            $user->update(['preferred_language' => $locale]);
        }

        return back()->withCookie($cookie);
    }
}
