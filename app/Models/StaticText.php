<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StaticText extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
    ];

    public function translations()
    {
        return $this->hasMany(StaticTextTranslation::class);
    }

    public function translation($locale = null)
    {
        $locale = $locale ?? app()->getLocale();
        return $this->translations->where('locale', $locale)->first();
    }
}

