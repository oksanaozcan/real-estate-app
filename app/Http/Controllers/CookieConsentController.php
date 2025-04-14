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

        $cookie = cookie('cookie_consent', $consent, 43200);

        return back()->withCookie($cookie);
    }
}
