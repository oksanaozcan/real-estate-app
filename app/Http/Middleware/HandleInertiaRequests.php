<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use App\Models\StaticText;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = $request->header('X-Locale', App::getLocale());
        App::setLocale($locale);

        $staticText = StaticText::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get()->mapWithKeys(function ($text) {
            return [
                $text->key => $text->translations->first()?->value
            ];
        });

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => $locale,
            'static_text' => $staticText,
        ];
    }
}
