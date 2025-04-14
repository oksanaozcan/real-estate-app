<?php

namespace App\Http\Controllers;

use App\Types\RoleType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DataToolsController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::check() && Auth::user()->hasRole(RoleType::ADMIN)) {
            return Inertia::render('DataTools');
        }

        $consent = Cookie::get('cookie_consent');

        $visitorRole = session('visitor_role');

        if ($visitorRole === 'user' || $request->cookie('cookie_consent') === 'true') {
            return Inertia::render('DataTools');
        }

        abort(403, 'Unauthorized.');
    }
}
