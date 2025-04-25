<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\CategoryTranslation;

class CategoryTranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $translations = [
            'detached-house' => [
                'en' => 'Detached house',
                'tr' => 'Müstakil ev',
                'ru' => 'Отдельный дом'
            ],
            'apartment-flat' => [
                'en' => 'Apartment/Flat',
                'tr' => 'Daire',
                'ru' => 'Квартира'
            ],
            'commercial' => [
                'en' => 'Commercial',
                'tr' => 'İş yeri',
                'ru' => 'Коммерческая недвижимость'
            ],
            'land-lots' => [
                'en' => 'Land & Lots',
                'tr' => 'Arsa',
                'ru' => 'Земельный участок'
            ],
        ];

        foreach ($translations as $key => $values) {
            $category = Category::where('key', $key)->first();

            if ($category) {
                foreach ($values as $lang => $value) {
                    CategoryTranslation::firstOrCreate([
                        'category_id'   => $category->id,
                        'locale' => $lang,
                    ], [
                        'value' => $value
                    ]);
                }
            }
        }
    }
}
