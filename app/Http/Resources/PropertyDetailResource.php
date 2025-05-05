<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'address' => $this->address,
            'price' => $this->price,
            'category_id' => $this->category_id,

            'category' => $this->whenLoaded('category', fn () => [
                'translation' => new CategoryTranslationResource($this->category->translations->first()),
            ]),

            'square' => $this->square,
            'rooms' => $this->rooms,
            'salon' => $this->salon,
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

            'translation' => $this->whenLoaded('translations', fn () =>
                new PropertyTranslationResource($this->translations->first())
            ),

            'images' => $this->whenLoaded('images', fn () =>
                $this->images->map(fn ($img) => [
                    'id' => $img->id,
                    'url' => $img->url,
                ])
            ),

            // 📝 Reserved for future fields:
            // 'video_url' => $this->video_url ?? null,
            // 'floor_plan_pdf' => $this->floor_plan_pdf ?? null,
            // 'virtual_tour_url' => $this->virtual_tour_url ?? null,
            // 'agent' => $this->whenLoaded('agent', fn () => [
            //     'name' => $this->agent->name,
            //     'phone' => $this->agent->phone,
            //     'email' => $this->agent->email,
            // ]),
        ];
    }
}
