<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Types\RoleType;
use Illuminate\Support\Facades\Log;

class DataToolsController extends Controller
{
    public function index(Request $request)
    {
        Log::info(['datatoolscontroller request:', $request->all()]);
        if (Auth::check() && Auth::user()->hasRole(RoleType::ADMIN)) {
            return Inertia::render('DataTools');
        }

        $visitorRole = session('visitor_role');

        Log::info(['session data: ', session()->all()]);

        if ($visitorRole === 'user' || $request->cookie('cookie_consent') === 'true') {
            return Inertia::render('DataTools');
        }

        abort(403, 'Unauthorized.');
    }
}

