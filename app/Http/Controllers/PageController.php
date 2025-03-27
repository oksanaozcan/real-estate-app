<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Models\Property;
use App\Models\StaticText;
use App\Http\Resources\PropertyResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\App;

class PageController extends Controller
{
    public function welcome(Request $request)
    {
        $user = Auth::user();
        $locale = $user ? ($user->preferred_language ?? 'tr') : $request->cookie('lang', 'tr');

        App::setLocale($locale);

        $search = StaticText::where('key', 'search')->first();

        $properties = Property::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get();

        return Inertia::render('Welcome', [
            'properties' => PropertyResource::collection($properties),
            'user_language' => $locale,
        ]);
    }

    public function properties(Request $request)
    {
        $user = Auth::user();
        $locale = $user ? ($user->preferred_language ?? 'tr') : $request->cookie('lang', 'tr');

        App::setLocale($locale);

        $properties = Property::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get();

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
            'user_language' => $locale,
        ]);
    }
}
