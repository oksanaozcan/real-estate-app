<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Http\Resources\PropertyDetailResource;
use App\Models\Category;
use App\Models\Property;
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

        if (! isset($request['sort'])) {
            $request['sort'] = 'date-desc-rank';
        }

        $properties = $propertyService->getProperties($this->locale, $request->all());

        return Inertia::render('Properties', [
            'properties' => PropertyResource::collection($properties),
            'filters' => $request->only(['search', 'category_id', 'listing_type', 'sort']),
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
            'filters' => $request->only(['search', 'category_id', 'sort', 'min_price', 'max_price', 'listing_type', 'min_rooms', 'min_bath', 'min_square', 'max_square']),
            'category' => $category,
        ]);
    }

    public function showProperty(Request $request, Property $property)
    {
        $this->setLocale($request);
        $locale = $this->locale;

        $fullProperty = $property->load([
            'images',
            'category.translations' => fn ($query) => $query->where('locale', $locale),
            'translations' => fn ($query) => $query->where('locale', $locale),
        ]);

        return Inertia::render('Property', [
            'property' => new PropertyDetailResource($fullProperty),
        ]);
    }

    public function privacyPolicy(Request $request)
    {
        $this->setLocale($request);

        return Inertia::render('CookiesPolicy');
    }
}
