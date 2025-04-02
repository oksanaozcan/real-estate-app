<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Property;

class PropertySeeder extends Seeder
{
    public function run()
    {
        $properties = [
            [
                'address' => '123 Main Street, New York',
                'price' => 250000.00,
                'category_id' => 1,
                'square' => 85,
                'rooms' => 3,
                'salon' => 1,
                'building_age' => '5 years',
                'located_floor' => 2,
                'floors_number' => 10,
                'bathrooms' => 2,
                'kitchen' => 'opened',
                'balcony' => true,
                'furnished' => true,
                'usage_status' => 'tenant',
                'on_site' => true,
                'site_name' => 'Green Park',
                'site_dues' => '150 USD',
                'credit_eligible' => true,
                'exchange_possibility' => false,
                'is_published' => true,
            ],
            [
                'address' => '456 Ocean Drive, Miami',
                'price' => 1200000.00,
                'category_id' => 2,
                'square' => 350,
                'rooms' => 5,
                'salon' => 2,
                'building_age' => 'New',
                'located_floor' => null,
                'floors_number' => 2,
                'bathrooms' => 4,
                'kitchen' => 'closed',
                'balcony' => true,
                'furnished' => true,
                'usage_status' => 'property_owner',
                'on_site' => false,
                'site_name' => null,
                'site_dues' => null,
                'credit_eligible' => false,
                'exchange_possibility' => true,
                'is_published' => true,
            ],
            [
                'address' => '789 Hill Road, London',
                'price' => 150000.00,
                'category_id' => 3,
                'square' => 40,
                'rooms' => 1,
                'salon' => 1,
                'building_age' => '2 years',
                'located_floor' => 5,
                'floors_number' => 12,
                'bathrooms' => 1,
                'kitchen' => 'opened',
                'balcony' => false,
                'furnished' => false,
                'usage_status' => 'empty',
                'on_site' => true,
                'site_name' => 'City Tower',
                'site_dues' => '80 USD',
                'credit_eligible' => true,
                'exchange_possibility' => false,
                'is_published' => true,
            ],
        ];

        foreach ($properties as $propertyData) {
            Property::create($propertyData);
        }
    }
}
