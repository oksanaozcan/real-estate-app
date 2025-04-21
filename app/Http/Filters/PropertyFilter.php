<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class PropertyFilter extends AbstractFilter
{
    use PropertyFilterTestingTrait;

    public const SEARCH = 'search';

    public const CATEGORY_ID = 'category_id';

    public const SORT = 'sort';

    protected function getCallbacks(): array
    {
        return [
            self::SEARCH => [$this, 'search'],
            self::CATEGORY_ID => [$this, 'categoryId'],
            self::SORT => [$this, 'sort'],
        ];
    }

    public function search(Builder $builder, $value)
    {
        $builder->where(function ($query) use ($value) {
            $query->orWhere('address', 'like', "%{$value}%")
                ->orWhereHas('translations', function ($q) use ($value) {
                    $q->where('title', 'like', "%{$value}%")
                        ->where('locale', app()->getLocale());
                });
        });
    }

    public function categoryId(Builder $builder, $value)
    {
        $builder->where('category_id', $value);
    }

    public function sort(Builder $builder, $value)
    {
        switch ($value) {
            case 'price-asc':
                $builder->orderBy('price', 'asc');
                break;
            case 'price-desc':
                $builder->orderBy('price', 'desc');
                break;
            case 'date-desc-rank':
                $builder->orderBy('created_at', 'desc');
                break;
            default:
                $builder->orderBy('created_at', 'desc');
                break;
        }
    }
}
