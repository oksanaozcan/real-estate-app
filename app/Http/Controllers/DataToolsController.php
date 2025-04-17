<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Types\RoleType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;
use App\Services\PropertyService;

class DataToolsController extends Controller
{
    public function index(Request $request, PropertyService $propertyService)
    {
        $this->setLocale($request);
        $locale = $this->locale;

        $favorites = session('favorite_properties', []);

        if (Auth::check() && Auth::user()->hasRole(RoleType::ADMIN)) {
            $properties = $propertyService->getFavoriteProperties($locale, $favorites);

            return Inertia::render('DataTools', [
                'properties' => PropertyResource::collection($properties),
            ]);
        }

        $consent = Cookie::get('cookie_consent');
        $visitorRole = session('visitor_role');

        if ($visitorRole === 'user' || $consent === 'true') {
            $properties = $propertyService->getFavoriteProperties($locale, $favorites);

            return Inertia::render('DataTools', [
                'properties' => PropertyResource::collection($properties),
            ]);
        }

        abort(403, 'Unauthorized.');
    }
}
