<?php

namespace App\Http\Controllers\System;

use App\Services\System\AppsService;
use App\Models\System\App as Apps;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;
use App;
use Response;

class AppsController extends Controller
{
    public function __construct(Apps $model, AppsService $service)
    {
        $this->model = $model;
        $this->service = $service;
    }

    public function menu()
    {
        $menu = $this->service->getMenu();
        return response()->json($menu);
    }

    public function index()
    {
        try {
            $index = $this->model->orderBy('seq')->get();
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
            $params['parent_id'] = $this->model->getParentId($params['seq']);
            $params['active'] = true;
            $params['created_by'] = auth()->user()->id;
            $params['created_at'] = now();
            $this->model->insert($params);
            $apps = $this->model->orderBy('seq')->get(); 
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
            $params['parent_id'] = $this->model->getParentId($params['seq']);
            $prams['created_by'] = auth()->user()->id;
            $params['created_at'] = now();
            $this->model->where('id', $id)->update($params);
            $apps = $this->model->orderBy('seq')->get();
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
            $apps = $this->model->orderBy('seq')->get();
            return response()->json($apps, 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function _test()
    {
        $a = $this->model->getParentId(999999050);
        return $a;
    }

    public function test()
    {
        $html = "
            <head><meta charset=\"UTF-8\"></head> 
            <H1>Laravel-snappy</H1>
            <H2>Laravel-snappy</H2>
            <H3>Laravel-snappy</H3>
            <H4>Laravel-snappy</H4>
            <H5>Laravel-snappy</H5>
            <H1>老司機開車了</H1>
            <H2>老司機開車了</H2>
            <H3>老司機開車了</H3>
            <H4>老司機開車了</H4>
            <H5>老司機開車了</H5>
        ";
        // $pdf = PDF::loadHTML($html)
        //     ->setPaper('a4', 'landscape')
        //     ->setWarnings(false)
        //     ->save('file.pdf');
        $pdf = PDF::loadHtml($html)->stream('download.pdf');
        return $pdf;
    }
}
