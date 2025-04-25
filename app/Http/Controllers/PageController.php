<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Category;
use App\Services\PropertyService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

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

        if (! isset($request['sort'])) {
            $request['sort'] = 'date-desc-rank';
        }

        $properties = $propertyService->getProperties($this->locale, $request->all());

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
            'filters' => $request->only(['search', 'category_id', 'sort']),
        ]);
    }

    public function category(Request $request, $slug, PropertyService $propertyService)
    {
        $this->setLocale($request);

        if (! isset($request['sort'])) {
            $request['sort'] = 'date-desc-rank';
        }

        $category = Category::where('key', $slug)->firstOrFail();

        $properties = $propertyService->getPropertiesByCategory(
            $this->locale,
            $category->id,
            $request->all()
        );

        return Inertia::render('Category', [
            'properties' => PropertyResource::collection($properties),
            'filters' => $request->only(['search', 'category_id', 'sort', 'min_price', 'max_price']),
            'category' => $category,
        ]);
    }

    public function privacyPolicy(Request $request)
    {
        $this->setLocale($request);

        return Inertia::render('CookiesPolicy');
    }
}
