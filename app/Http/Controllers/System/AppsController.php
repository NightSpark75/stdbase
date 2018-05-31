<?php
namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\System\AppsService;
use App\Models\Base\Users;
use App\Models\System\Roles;
use App\Models\System\SRouteRole;

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

    public function test()
    {
        $users = new Users();
        $user = $users->first();
        $roles = $user->roles;
        //$apps = $user->with('roles.apps')->get();
        $apps = $user->getApps()->get();
        return compact('apps');
    }
}
