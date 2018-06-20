<?php

namespace App\Http\Controllers\System;

use App\Services\System\AppsService;
use App\Models\System\App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppsController extends Controller
{
    public function __construct(App $model, AppsService $service)
    {
        $this->model = $model;
        $this->service = $service;
    }

    public function menu()
    {
        $menu = $this->service->getMenu();
        return response()->json($menu);
    }
}
