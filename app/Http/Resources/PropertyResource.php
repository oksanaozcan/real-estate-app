<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'address' => $this->address,
            'price' => $this->price,
            'category_id' => $this->category_id,
            'category' => $this->whenLoaded('category', function () {
                return [
                    'translation' => new CategoryTranslationResource($this->category->translations->first()),
                ];
            }),
            'square' => $this->square,
            'rooms' => $this->rooms,
            'building_age' => $this->building_age,
            'located_floor' => $this->located_floor,
            'floors_number' => $this->floors_number,
            'bathrooms' => $this->bathrooms,
            'kitchen' => $this->kitchen,
            'balcony' => $this->balcony,
            'furnished' => $this->furnished,
            'usage_status' => $this->usage_status,
            'on_site' => $this->on_site,
            'site_name' => $this->site_name,
            'site_dues' => $this->site_dues,
            'credit_eligible' => $this->credit_eligible,
            'exchange_possibility' => $this->exchange_possibility,
            'created_at' => $this->created_at->diffForHumans(),
            'is_published' => $this->is_published,
            'translations' => $this->whenLoaded('translations', function () {
                return new PropertyTranslationResource($this->translations->first());
            }),
        ];

    }
}
