<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePropertyRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            // Translatable fields
            'title_tr' => ['required', 'string', 'min:5', 'max:255'],
            'title_en' => ['required', 'string', 'min:5', 'max:255'],
            'title_ru' => ['required', 'string', 'min:5', 'max:255'],
            'description_tr' => ['required', 'string', 'min:5', 'max:4800'],
            'description_en' => ['required', 'string', 'min:5', 'max:4800'],
            'description_ru' => ['required', 'string', 'min:5', 'max:4800'],

            // Property base fields
            'address' => ['required', 'string', 'min:5', 'max:255'],
            'price' => ['required', 'numeric', 'min:0', 'max:9999999999.99'],
            'category_id' => ['required', 'exists:categories,id'],
            'square' => ['required', 'integer'],
            'rooms' => ['required', 'integer'],
            'salon' => ['required', 'integer'],
            'building_age' => ['required', 'integer'],
            'located_floor' => ['nullable', 'integer'],
            'floors_number' => ['required', 'integer'],
            'bathrooms' => ['required', 'integer'],
            'kitchen' => ['required', 'string', Rule::in(['closed', 'opened'])],
            'balcony' => ['required', 'boolean'],
            'furnished' => ['required', 'boolean'],
            'usage_status' => ['required', 'string', Rule::in(['empty', 'property_owner', 'tenant'])],
            'on_site' => ['required', 'boolean'],
            'site_name' => ['nullable', 'string', 'max:255'],
            'site_dues' => ['nullable', 'string', 'max:255'],
            'credit_eligible' => ['required', 'boolean'],
            'exchange_possibility' => ['required', 'boolean'],
            'is_published' => ['required', 'boolean'],
        ];
    }
}
