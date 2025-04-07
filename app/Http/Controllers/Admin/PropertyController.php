<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StorePropertyRequest;
use App\Http\Resources\PropertyResource;
use App\Services\PropertyService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class PropertyController extends Controller
{
    public function index(PropertyService $propertyService)
    {
        $properties = $propertyService->getPropertiesWithTranslations($this->locale);

        return Inertia::render('Admin/Properties/Index', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Properties/Create');
    }

    public function store(StorePropertyRequest $request, PropertyService $propertyService)
    {
        $validatedData = $request->validated();

        try {
            $property = $propertyService->createProperty($validatedData);

            return redirect()->route('properties.index')->with('success', 'Property created successfully.');
        } catch (\Exception $e) {
            report($e);

            return abort(500, 'An error occurred while creating the property.');
        }
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
