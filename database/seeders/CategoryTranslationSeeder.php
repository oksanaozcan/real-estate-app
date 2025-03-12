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
        // Define translations for each category slug
        $translations = [
            'residential' => [
                'en' => 'Residential',
                'tr' => 'Konut',
                'ru' => 'Жильё'
            ],
            'commercial' => [
                'en' => 'Commercial',
                'tr' => 'İş yeri',
                'ru' => 'Коммерческая недвижимость'
            ],
            'land&lots' => [ // Keeping slug consistent with your `CategorySeeder`
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
