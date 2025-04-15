<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AssignVisitorRole
{
    public function handle(Request $request, Closure $next)
    {
        if (! $request->user()) {
            $cookieConsent = $request->cookie('cookie_consent');

            // Reset and reassign every time
            // session()->forget('visitor_role');

            $role = $cookieConsent === 'true' ? 'user' : 'guest';
            session(['visitor_role' => $role]);
        }

        return $next($request);
    }
}
