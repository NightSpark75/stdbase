<?php

namespace App\Http\Controllers\System;

use App\Services\System\AppsService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppsController extends Controller
{
    public function __construct(AppsService $service)
    {
        $this->service = $service;
    }

    public function menu()
    {
        $menu = $this->service->getMenu();
        return response()->json($menu);
    }
    
    public function show()
    {
        $show = $this->service->appList();
        return response()->json($show);
    }
    
    public function create(Request $request)
    {
        $create = $this->service->createApps($resquest);
        return response()->json($create);
    }

    public function edit($id)
    {
        $edit = $this->service->getApp($id);
        return response()->json($edit);
    }

    public function update(Request $request, $id)
    {
        $update = $this->service->updateApp($params, $id);
        return response()->json($update);
    }

    public function destroy($id)
    {
        $destroy = $this->service->deleteApp($id);
        return response()->json($destroy);
    }
}
