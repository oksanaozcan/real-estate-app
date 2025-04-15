<?php

namespace App\Http\Controllers;

class CookieConsentController extends Controller
{
    public function index($consent)
    {
        if (! in_array($consent, [true, false])) {
            return response()->json(['error' => 'Invalid consent'], 400);
        }

        session(['cookie_consent' => $consent]);

        $cookie = cookie('cookie_consent', $consent, 60 * 24 * 365); //1 year in minutes

        return back()->withCookie($cookie);
    }
}
