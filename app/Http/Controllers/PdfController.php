<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Http\Resources\PropertyDetailResource;

class PdfController extends Controller
{
    // public function downloadPdf(Request $request, Property $property)
    // {
    //     $this->setLocale($request);
    //     $locale = $this->locale;

    //     $fullProperty = $property->load([
    //         'images',
    //         'translations' => fn ($query) => $query->where('locale', $locale),
    //     ]);

    //     $propertyResource = (new PropertyDetailResource($fullProperty))->toArray($request);

    //     $pdf = Pdf::loadView('pdfs.property', ['property' => $propertyResource]);

    //     return $pdf->download("property-{$property->id}.pdf");
    // }

    public function downloadPdf(Request $request, Property $property)
    {
        $this->setLocale($request);
        $locale = $this->locale;

        $fullProperty = $property->load([
            'images',
            'translations' => fn ($query) => $query->where('locale', $locale),
        ]);

        $propertyResource = (new PropertyDetailResource($fullProperty))->toArray($request);

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdfs.property', ['property' => $propertyResource]);

        return $pdf->download("property-{$property->id}.pdf");
    }
}
