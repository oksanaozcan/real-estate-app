<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Property;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            AdminSeeder::class,
            // UserSeeder::class,
            CategorySeeder::class,
            CategoryTranslationSeeder::class,
            PropertySeeder::class,
            PropertyTranslationSeeder::class,
            StaticTextSeeder::class,
        ]);

        Property::factory()->count(15)->create();
    }
}
