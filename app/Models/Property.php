<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Filterable;

class Property extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'address', 'price', 'category_id', 'square', 'rooms', 'building_age', 'located_floor',
        'floors_number', 'bathrooms', 'kitchen', 'balcony', 'furnished', 'usage_status',
        'on_site', 'site_name', 'site_dues', 'credit_eligible', 'exchange_possibility', 'is_published', 'listing_type',
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

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function images()
    {
        return $this->hasMany(PropertyImage::class);
    }
}
