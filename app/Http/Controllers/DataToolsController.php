<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Types\RoleType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class DataToolsController extends Controller
{
    public function index(Request $request)
    {
        $favorites = session('user_favorites', []);

        if (Auth::check() && Auth::user()->hasRole(RoleType::ADMIN)) {
            $properties = Property::whereIn('id', $favorites)
                ->with(['translation', 'images'])
                ->paginate(12);

            return Inertia::render('DataTools', [
                'properties' => PropertyResource::collection($properties),
            ]);
        }

        $consent = Cookie::get('cookie_consent');
        $visitorRole = session('visitor_role');

        if ($visitorRole === 'user' || $consent === 'true') {
            $properties = Property::whereIn('id', $favorites)
                ->with(['translation', 'images'])
                ->paginate(12);

            return Inertia::render('DataTools', [
                'properties' => PropertyResource::collection($properties),
            ]);
        }

        abort(403, 'Unauthorized.');
    }
}
