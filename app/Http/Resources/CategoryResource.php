<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'key' => $this->key,
            'icon' => $this->icon,
            'translations' => $this->whenLoaded('translations', function () {
                return new CategoryTranslationResource($this->translations->first());
            }),
        ];
    }
}
