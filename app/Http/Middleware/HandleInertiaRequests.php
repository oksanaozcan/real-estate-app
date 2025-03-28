<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use App\Models\StaticText;
use App\Models\Category;
use App\Http\Resources\CategoryResource;

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
        $locale = $request->cookie('lang', $request->header('X-Locale', config('app.locale')));

        App::setLocale($locale);

        $staticText = StaticText::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get()->mapWithKeys(function ($text) {
            return [$text->key => $text->translations->first()?->value ?? ''];
        });

        $categories = Category::with(['translations' => function ($query) use ($locale) {
            $query->where('locale', $locale);
        }])->get();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => $locale,
            'static_text' => $staticText,
            'categories' => CategoryResource::collection($categories),
        ];
    }
}
