<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\System\Parameter;

class ParameterController extends Controller
{
    public function __construct(Parameter $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        try {
            $index = $this->model->orderBy('category')->get();
            return response()->json($index, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function store()
    {
        try{
            $params = request()->input();
            $orderBy = ['catetory'];
            $this->model->post($params, $orderby);
            $apps = $this->model->orderBy('category')->get();
            return response()->json($apps, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $params = request()->input();
            unset($params['id']);
            $prams['created_by'] = auth()->user()->id;
            $params['created_at'] = now();
            $this->model->where('id', $id)->update($params);
            $apps = $this->model->orderBy('category')->get();
            return response()->json($apps, 200);
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
            $apps = $this->model->orderBy('category')->get();
            return response()->json($apps, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }
}
