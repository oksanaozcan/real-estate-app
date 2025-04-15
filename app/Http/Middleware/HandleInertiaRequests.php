<?php

namespace App\Http\Middleware;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\StaticText;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Middleware;
use Illuminate\Support\Arr;

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
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
        ];
    }
}
