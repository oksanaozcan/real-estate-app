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
        Category::firstOrCreate(['slug' => 'residential']);
        Category::firstOrCreate(['slug' => 'commercial']);
        Category::firstOrCreate(['slug' => 'land&lots']);
        Category::firstOrCreate(['slug' => 'rentals']);
    }
}
