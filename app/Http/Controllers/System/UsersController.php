<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Services\System\UsersService;
use App\Models\Base\User;

class UsersController extends ApiController
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
