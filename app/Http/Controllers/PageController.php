<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Models\Property;
use App\Http\Resources\PropertyResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class PageController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Welcome');
    }

    public function properties(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $locale = $user->preferred_language ?? 'tr';
        } else {
            $locale = $request->cookie('lang', 'tr');
        }

        $properties = Property::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get();

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }
}
