<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Types\RoleType;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::firstOrCreate(['name' => RoleType::ADMIN]);
        Role::firstOrCreate(['name' => RoleType::USER]);
        Role::firstOrCreate(['name' => RoleType::GUEST]);
    }
}
