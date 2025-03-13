<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('address');
            $table->decimal('price', 10, 2);
            $table->foreignId('category_id')->constrained();
            $table->integer('square');
            $table->string('rooms');
            $table->string('building_age');
            $table->integer('located_floor')->nullable();
            $table->integer('floors_number');
            $table->integer('bathrooms');
            $table->enum('kitchen', ['closed', 'opened'])->default('closed'); //TODO: remove default func
            $table->boolean('balcony')->default(false);
            $table->boolean('furnished')->default(false);
            $table->enum('usage_status', ['empty', 'property_owner', 'tenant']);
            $table->boolean('on_site');
            $table->string('site_name')->nullable();
            $table->string('site_dues')->nullable();
            $table->boolean('credit_eligible')->default(true);
            $table->boolean('exchange_possibility')->default(false);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
