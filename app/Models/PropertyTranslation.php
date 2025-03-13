<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PropertyTranslation extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id', 'locale', 'title', 'description'
    ];

    public $timestamps = false;
}
