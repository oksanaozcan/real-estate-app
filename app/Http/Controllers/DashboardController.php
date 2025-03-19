<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Property;
use App\Http\Resources\PropertyResource;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $locale = $user->preferred_language ?? 'tr';

        $properties = Property::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get();

        return Inertia::render('Dashboard', [
            'properties' => PropertyResource::collection($properties),
            'user_language' => $locale,
        ]);
    }
}
