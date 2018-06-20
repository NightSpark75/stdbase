<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\System\UsersService;

class UsersController extends Controller
{
    private $service;

    public function __construct(UsersService $service)
    {
        $this->service = $service;
    }
    
    public function index()
    {
        $index = $this->service->getUsers();
        return response()->json($index);
    }

    public function create()
    {
        $params = request()->input();
        $create = $this->service->createUser($params);
        return response()->json($create);
    }

    public function edit($id)
    {
        $edit = $this->service->editUser($id);
        return response()->json($edit);
    }

    public function update($id)
    {
        $params = request()->input();
        $update = $this->service->updateUser($params, $id);
        return response()->json($update);
    }

    public function destroy($id)
    {
        $destroy = $this->service->destroyUser($id);
        return response()->json($destroy);
    }
}
