<?php
namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\System\AppsService;

class AppsController extends Controller
{
    private $apps;

    public function __construct(AppsService $apps)
    {   
        $this->apps = $apps;
    }

    public function list()
    {
        try {
            $list = $this->apps->getApps();
            return response()->json($list);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
