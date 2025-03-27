<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StaticTextTranslation extends Model
{
    use HasFactory;

    protected $fillable = [
        'static_text_id', 'locale', 'value'
    ];

    public $timestamps = false;
}
