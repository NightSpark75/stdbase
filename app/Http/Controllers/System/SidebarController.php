<?php
namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\System\SidebarService;

class SidebarController extends Controller
{
    private $sidebar;

    public function __construct(Sidebar $sidebar)
    {   
        $this->sidebar = $sidebar;
    }

    public function sidebar()
    {
        try {
            $list = $this->sidebar->getSidebar();
            return response()->json($list);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function test()
    {
        return 'test';
    }
}
