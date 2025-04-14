<?php

namespace App\Http\Middleware;

use App\Types\RoleType;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OnlyAdminCanViewAuthRoutes
{
    public function handle(Request $request, Closure $next)
    {

        if (! Auth::check()) {
            return $next($request);
        }

        if (! Auth::user()->hasRole(RoleType::ADMIN)) {
            abort(403, 'Access to login/register is restricted.');
        }

        return $next($request);
    }
}
