<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class TranslationController extends Controller
{
    public function changeLanguage($locale)
    {
        if (in_array($locale, ['en', 'tr', 'ru'])) {
            session(['locale' => $locale]);
            App::setLocale($locale);

            return back();
        }

        return response()->json(['error' => 'Invalid locale'], 400);
    }
}
