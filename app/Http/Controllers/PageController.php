<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Category;
use App\Models\Property;
use App\Models\StaticText;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PageController extends Controller
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

    public function welcome(Request $request)
    {
        $this->setLocale($request);

        $search = StaticText::where('key', 'search')->first();

        return Inertia::render('Welcome');
    }

    public function properties(Request $request)
    {
        $this->setLocale($request);

        $properties = Property::with(['translations' => function ($query) {
            $query->where('locale', $this->locale);
        }])->get();

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }

    public function category(Request $request, $slug)
    {
        $this->setLocale($request);

        $category = Category::where('key', $slug)->firstOrFail();

        $properties = Property::where('category_id', $category->id)
            ->with(['translations' => function ($query) {
                $query->where('locale', $this->locale);
            }])->get();

        return Inertia::render('Category', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }
}
