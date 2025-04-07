<?php

namespace Database\Factories;

use App\Models\PropertyImage;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PropertyImageFactory extends Factory
{
    protected $model = PropertyImage::class;

    public function definition()
    {
        $directory = storage_path('app/public/properties');
        $filename = $this->faker->image($directory, 640, 480, null, false); // <- returns the filename

        return [
            'image_path' => 'properties/' . $filename,
        ];
    }
}
