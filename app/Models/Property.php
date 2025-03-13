<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'address', 'price', 'category_id', 'square', 'rooms', 'building_age', 'located_floor',
        'floors_number', 'bathrooms', 'kitchen', 'balcony', 'furnished', 'usage_status',
        'on_site', 'site_name', 'site_dues', 'credit_eligible', 'exchange_possibility', 'is_published'
    ];

    public function translations()
    {
        return $this->hasMany(PropertyTranslation::class);
    }

    public function translation($locale = null)
    {
        $locale = $locale ?? app()->getLocale();
        return $this->translations->where('locale', $locale)->first();
    }
}
