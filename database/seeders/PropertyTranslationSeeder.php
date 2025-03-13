<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\PropertyTranslation;

class PropertyTranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $translations = [
            [
                'property_id' => 1,
                'locale' => 'en',
                'title' => 'Modern Apartment',
                'description' => 'A stylish and modern apartment in the city center.',
            ],
            [
                'property_id' => 1,
                'locale' => 'ru',
                'title' => 'Современная квартира',
                'description' => 'Стильная и современная квартира в центре города.',
            ],
            [
                'property_id' => 1,
                'locale' => 'tr',
                'title' => 'Modern Daire',
                'description' => 'Şehir merkezinde şık ve modern bir daire.',
            ],
            [
                'property_id' => 2,
                'locale' => 'en',
                'title' => 'Luxury Villa',
                'description' => 'A luxurious beachfront villa with stunning views.',
            ],
            [
                'property_id' => 2,
                'locale' => 'ru',
                'title' => 'Роскошная вилла',
                'description' => 'Роскошная вилла на берегу с потрясающим видом.',
            ],
            [
                'property_id' => 2,
                'locale' => 'tr',
                'title' => 'Lüks Villa',
                'description' => 'Muhteşem manzaralı lüks bir sahil villası.',
            ],
            [
                'property_id' => 3,
                'locale' => 'en',
                'title' => 'Cozy Studio',
                'description' => 'A small but cozy studio perfect for singles or students.',
            ],
            [
                'property_id' => 3,
                'locale' => 'ru',
                'title' => 'Уютная студия',
                'description' => 'Маленькая, но уютная студия, идеально подходящая для одиночек или студентов.',
            ],
            [
                'property_id' => 3,
                'locale' => 'tr',
                'title' => 'Rahat Stüdyo',
                'description' => 'Bekarlar veya öğrenciler için mükemmel küçük ama rahat bir stüdyo.',
            ],
        ];

        foreach ($translations as $translation) {
            PropertyTranslation::create($translation);
        }
    }
}
