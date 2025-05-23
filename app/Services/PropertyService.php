<?php

namespace App\Services;

use App\Http\Filters\PropertyFilter;
use App\Models\Property;
use App\Models\PropertyImage;
use Illuminate\Support\Facades\DB;

class PropertyService
{
    public function getPropertiesWithTranslations($locale)
    {
        return Property::with([
            'translations' => function ($query) use ($locale) {
                $query->where('locale', $locale);
            },
            'category.translations' => function ($query) use ($locale) {
                $query->where('locale', $locale);
            },
        ])->get();
    }

    public function getPropertiesByCategory($locale, $categoryId, array $queryParams = [])
    {
        $filter = new PropertyFilter(array_merge($queryParams, ['category_id' => $categoryId]));

        return Property::with([
            'translations' => fn ($query) => $query->where('locale', $locale),
            'images' => fn ($query) => $query->limit(1),
        ])
            ->where('is_published', true)
            ->filter($filter)
            ->paginate(12)
            ->withQueryString();
    }

    public function getProperties($locale, array $queryParams = [])
    {
        $filter = new PropertyFilter($queryParams);

        return Property::with([
            'translations' => fn ($query) => $query->where('locale', $locale),
            'images' => fn ($query) => $query->limit(1),
        ])
            ->where('is_published', true)
            ->filter($filter)
            ->paginate(12)
            ->withQueryString();
    }

    public function getFavoriteProperties($locale, $favorites)
    {
        return Property::whereIn('id', $favorites)
            ->with([
                'translations' => fn ($query) => $query->where('locale', $locale),
                'images' => fn ($query) => $query->limit(1),
            ])
            ->paginate(12);
    }

    public function createProperty($validatedData)
    {
        DB::beginTransaction();

        try {
            // Create the base property
            $property = Property::create([
                'address' => $validatedData['address'],
                'price' => $validatedData['price'],
                'category_id' => $validatedData['category_id'],
                'square' => $validatedData['square'],
                'rooms' => $validatedData['rooms'],
                'salon' => $validatedData['salon'],
                'building_age' => $validatedData['building_age'],
                'located_floor' => $validatedData['located_floor'],
                'floors_number' => $validatedData['floors_number'],
                'bathrooms' => $validatedData['bathrooms'],
                'kitchen' => $validatedData['kitchen'],
                'balcony' => $validatedData['balcony'],
                'furnished' => $validatedData['furnished'],
                'usage_status' => $validatedData['usage_status'],
                'listing_type' => $validatedData['listing_type'],
                'on_site' => $validatedData['on_site'],
                'site_name' => $validatedData['site_name'],
                'site_dues' => $validatedData['site_dues'],
                'credit_eligible' => $validatedData['credit_eligible'],
                'exchange_possibility' => $validatedData['exchange_possibility'],
                'is_published' => $validatedData['is_published'],
            ]);

            // Create translations
            $translations = [
                ['locale' => 'tr', 'title' => $validatedData['title_tr'], 'description' => $validatedData['description_tr']],
                ['locale' => 'en', 'title' => $validatedData['title_en'], 'description' => $validatedData['description_en']],
                ['locale' => 'ru', 'title' => $validatedData['title_ru'], 'description' => $validatedData['description_ru']],
            ];

            foreach ($translations as $translation) {
                $property->translations()->create($translation);
            }

            // Save the images
            if (isset($validatedData['images'])) {
                foreach ($validatedData['images'] as $imagePath) {
                    PropertyImage::create([
                        'property_id' => $property->id,
                        'image_path' => $imagePath,
                    ]);
                }
            }

            DB::commit();

            return $property;

        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
