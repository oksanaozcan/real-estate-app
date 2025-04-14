<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Category;
use App\Models\StaticText;
use App\Services\PropertyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function welcome(Request $request)
    {
        $this->setLocale($request);
        return Inertia::render('Welcome');
    }

    public function properties(Request $request, PropertyService $propertyService)
    {
        $this->setLocale($request);

        $properties = $propertyService->getAllProperties($this->locale);

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
            ],
        );

    }

    public function category(Request $request, $slug, PropertyService $propertyService)
    {
        $this->setLocale($request);

        $category = Category::where('key', $slug)->firstOrFail();
        $categoryId = $category->id;

        $properties = $propertyService->getPropertiesByCategory($this->locale, $categoryId);

        return Inertia::render('Category', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }

    public function privacyPolicy (Request $request)
    {
        $this->setLocale($request);
        return Inertia::render('CookiesPolicy');
    }
}
