<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use  App\Http\Filters\PropertyFilterTestingTrait;
use Illuminate\Support\Facades\Log;

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

  public function search(Builder $builder, $value, $columns = ['title', 'address'])
  {
    $builder->where(function ($query) use ($value, $columns) {
        foreach ($columns as $column) {
            $query->orWhere($column, 'like', "%{$value}%");
        }
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
        case 'name-asc':
            $builder->orderBy('title', 'asc');
            break;
        case 'name-desc':
            $builder->orderBy('title', 'desc');
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
