<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Types\RoleType;
use App\Models\User;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123456789'),
            'remember_token' => Str::random(10),
        ])->assignRole(RoleType::ADMIN);
    }
}
