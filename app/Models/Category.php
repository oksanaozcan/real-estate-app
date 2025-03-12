<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $guarded = [];

    public function translations()
    {
        return $this->hasMany(CategoryTranslation::class);
    }

    public function getTranslation($language)
    {
        return $this->translations->firstWhere('language_code', $language);
    }
}
