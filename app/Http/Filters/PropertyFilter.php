<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;

class PropertyFilter extends AbstractFilter
{
    use PropertyFilterTestingTrait;

    public const SEARCH = 'search';
    public const CATEGORY_ID = 'category_id';
    public const SORT = 'sort';
    public const MIN_PRICE = 'min_price';
    public const MAX_PRICE = 'max_price';

    protected function getCallbacks(): array
    {
        return [
            self::SEARCH => [$this, 'search'],
            self::CATEGORY_ID => [$this, 'categoryId'],
            self::SORT => [$this, 'sort'],
            self::MIN_PRICE => [$this, 'min_price'],
            self::MAX_PRICE => [$this, 'max_price'],
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

    public function min_price(Builder $builder, $value)
    {
        $builder->where('price', '>=', $value);
    }

    public function max_price(Builder $builder, $value)
    {
        $builder->where('price', '<=', $value);
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
            case 'date-asc':
                $builder->orderBy('created_at', 'asc');
                break;
            case 'date-desc-rank':
                $builder->orderBy('created_at', 'desc');
                break;
            case 'square-asc':
                $builder->orderBy('square', 'asc');
                break;
            case 'square-desc':
                $builder->orderBy('square', 'desc');
                break;
            case 'rooms-asc':
                $builder->orderBy('rooms', 'asc');
                break;
            case 'rooms-desc':
                $builder->orderBy('rooms', 'desc');
                break;
            case 'floor-asc':
                $builder->orderBy('located_floor', 'asc');
                break;
            case 'floor-desc':
                $builder->orderBy('located_floor', 'desc');
                break;
            default:
                $builder->orderBy('created_at', 'desc');
                break;
        }
    }
}
