<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class PropertyImage extends Model
{
    use HasFactory;

    protected $table = 'property_images';

    protected $guarded = [];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function getUrlAttribute()
    {
        return Storage::disk('public')->url($this->image_path);
    }
}
