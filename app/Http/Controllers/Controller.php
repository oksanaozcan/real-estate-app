<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

abstract class Controller
{
    protected $locale;

    public function __construct(Request $request)
    {
        $this->setLocale($request);
    }

    protected function setLocale(Request $request)
    {
        $user = Auth::user();
        $this->locale = $user ? ($user->preferred_language ?? 'tr') : $request->cookie('lang', 'tr');
        App::setLocale($this->locale);
    }
}
