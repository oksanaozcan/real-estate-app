<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\PropertyImage;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    protected $model = Property::class;

    public function definition()
    {
        return [
            'address' => $this->faker->address,
            'price' => $this->faker->randomFloat(2, 100000, 1000000),
            // 'category_id' => $this->faker->numberBetween(1, 5),
            'category_id' => 1,
            'square' => $this->faker->numberBetween(60, 300),
            'rooms' => $this->faker->numberBetween(1, 5),
            'salon' => $this->faker->numberBetween(1, 2),
            'building_age' => $this->faker->numberBetween(0, 30),
            'located_floor' => $this->faker->numberBetween(0, 10),
            'floors_number' => $this->faker->numberBetween(1, 20),
            'bathrooms' => $this->faker->numberBetween(1, 3),
            'kitchen' => $this->faker->randomElement(['closed', 'opened']),
            'balcony' => $this->faker->boolean,
            'furnished' => $this->faker->boolean,
            'usage_status' => $this->faker->randomElement(['empty', 'property_owner', 'tenant']),
            'on_site' => $this->faker->boolean,
            'site_name' => $this->faker->optional()->company,
            'site_dues' => $this->faker->optional()->randomDigitNotNull,
            'credit_eligible' => $this->faker->boolean,
            'exchange_possibility' => $this->faker->boolean,
            // 'is_published' => $this->faker->boolean,
            'is_published' => true,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Property $property) {
            $locales = ['tr', 'en', 'ru'];

            foreach ($locales as $locale) {
                $property->translations()->create([
                    'locale' => $locale,
                    'title' => $this->faker->sentence(4),
                    'description' => $this->faker->paragraph,
                ]);
            }

            PropertyImage::factory()->count(3)->create([
                'property_id' => $property->id,
            ]);
        });
    }
}

