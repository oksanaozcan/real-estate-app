<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::with([
            'translations' => function ($query) {
                $query->where('locale', $this->locale);
            },
            'category.translations' => function ($query) {
                $query->where('locale', $this->locale);
            },
        ])->get();

        return Inertia::render('Admin/Properties/Index', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Properties/Create');
    }

    public function store(Request $request)
    {
        // Log::info($request);
        $validatedData = $request->validate([
            'title_tr' => ['required', 'string', 'min:5', 'max:255'],
            'title_en' => ['required', 'string', 'min:5', 'max:255'],
            'title_ru' => ['required', 'string', 'min:5', 'max:255'],

            'address' => ['required', 'string', 'min:5', 'max:255'],
            'price' => ['required', 'numeric', 'min:0', 'max:9999999999.99'],
            'category_id' => ['required', 'exists:categories,id'],
            'square' => ['required', 'integer', 'min:0'],
            'rooms' => ['required', 'integer', 'min:0'],
            'salon' => ['required', 'integer', 'min:0'],
            'building_age' => ['required', 'string', 'min:2', 'max:255'],
            'located_floor' => ['nullable', 'integer'],
            'floors_number' => ['required', 'integer'],
            'bathrooms' => ['required', 'integer'],
            'kitchen' => ['required', 'string', Rule::in(['closed', 'opened'])],
            'balcony' => ['required', 'boolean'],
            'furnished' => ['required', 'boolean'],
            'usage_status' => ['required', 'string', Rule::in(['empty', 'property_owner', 'tenant'])],
            'on_site' => ['required', 'boolean'],
            'site_name' => ['nullable', 'string', 'max:255'],
            'site_dues' => ['nullable', 'string', 'max:255'],
            'credit_eligible' => ['required', 'boolean'],
            'exchange_possibility' => ['required', 'boolean'],

            'description_tr' => ['required', 'string', 'min:5', 'max:4800'],
            'description_en' => ['required', 'string', 'min:5', 'max:4800'],
            'description_ru' => ['required', 'string', 'min:5', 'max:4800'],
        ]);

        // Property::create($validatedData);

        // return to_route('properties.index')->with('success', 'Property created successfully.');
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
