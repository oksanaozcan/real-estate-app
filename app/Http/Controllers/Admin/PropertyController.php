<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Property;
use App\Http\Resources\PropertyResource;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::with(['translations' => function ($query) {
            $query->where('locale', $this->locale);
        }])->get();

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
        //
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
