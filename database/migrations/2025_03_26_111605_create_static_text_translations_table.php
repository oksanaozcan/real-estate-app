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
        Schema::create('static_text_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('static_text_id')->constrained('static_texts')->onDelete('cascade');
            $table->enum('locale', ['tr', 'en', 'ru']);
            $table->text('value');
            $table->timestamps();

            $table->unique(['static_text_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('static_text_translations');
    }
};
