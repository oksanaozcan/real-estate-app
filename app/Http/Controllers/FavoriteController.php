<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FavoriteController extends Controller
{
    public function sync(Request $request)
    {
        $favorites = $request->input('favorites', []);
        session(['favorite_properties' => $favorites]);

        return response()->json([
            'status' => 'synced',
        ]);
    }
}
