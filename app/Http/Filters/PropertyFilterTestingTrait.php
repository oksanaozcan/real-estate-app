<?php

namespace App\Http\Filters;

trait PropertyFilterTestingTrait
{
    /**
     * Expose getCallbacks for testing.
     *
     * @return array
     */
    public function exposeGetCallbacks(): array
    {
        return $this->getCallbacks();
    }

    /**
     * Expose getQueryParam for testing.
     *
     * @param string $key
     * @param mixed|null $default
     * @return mixed|null
     */
    public function exposeGetQueryParam(string $key, $default = null)
    {
        return $this->getQueryParam($key, $default);
    }

    public function exposeRemoveQueryParam(string ...$keys)
    {
        return $this->removeQueryParam(...$keys);
    }
}
