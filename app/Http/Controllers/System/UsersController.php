<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\System\UsersService;
use App\Models\Base\User;

class UsersController extends Controller
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        try {
            $index = $this->model->all();
            return response()->json($index, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function store()
    {
        try{
            $params = request()->input();
            $params['id'] = guid();
            $params['active'] = true;
            $params['password'] = '123456789';
            $params['company_id'] = 'x';
            $params['created_by'] = auth()->user()->id;
            $params['created_at'] = now();
            $this->model->insert($params);
            $users = $this->model->all(); 
            return response()->json($users, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $params = request()->input();
            unset($params['id']);
            $params['company_id'] = 'x';
            $prams['created_by'] = auth()->user()->id;
            $params['created_at'] = now();
            $this->model->where('id', $id)->update($params);
            $users = $this->model->all();
            return response()->json($users, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function destroy($id)
    {
        try {
            $user_id = auth()->user()->id;
            $this->model->where('id', $id)->update(['deleted_by' => $user_id]);
            $this->model->where('id', $id)->delete();
            $users = $this->model->all();
            return response()->json($users, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }
}
