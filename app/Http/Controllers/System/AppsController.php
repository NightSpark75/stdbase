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

    public function test()
    {
        $html = "
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
