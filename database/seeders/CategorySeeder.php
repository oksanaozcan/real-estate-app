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
        Category::firstOrCreate(['slug' => 'detached-house']);
        Category::firstOrCreate(['slug' => 'apartment-flat']);
        Category::firstOrCreate(['slug' => 'commercial']);
        Category::firstOrCreate(['slug' => 'land&lots']);
        Category::firstOrCreate(['slug' => 'rentals']);
    }
}
