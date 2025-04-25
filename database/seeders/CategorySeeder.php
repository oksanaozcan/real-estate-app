<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::firstOrCreate(['key' => 'detached-house', 'icon' => 'home']);
        Category::firstOrCreate(['key' => 'apartment-flat', 'icon' => 'apartment']);
        Category::firstOrCreate(['key' => 'commercial', 'icon' => 'commercial']);
        Category::firstOrCreate(['key' => 'land-lots', 'icon' => 'land']);
    }
}
