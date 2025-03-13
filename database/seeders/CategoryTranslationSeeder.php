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
            'land&lots' => [
                'en' => 'Land & Lots',
                'tr' => 'Arsa',
                'ru' => 'Земельный участок'
            ],
            'rentals' => [
                'en' => 'Rentals',
                'tr' => 'Kiralık',
                'ru' => 'Аренда'
            ],
        ];

        foreach ($translations as $slug => $titles) {
            $category = Category::where('slug', $slug)->first();

            if ($category) {
                foreach ($titles as $lang => $title) {
                    CategoryTranslation::firstOrCreate([
                        'category_id'   => $category->id,
                        'language_code' => $lang,
                    ], [
                        'title' => $title
                    ]);
                }
            }
        }
    }
}
