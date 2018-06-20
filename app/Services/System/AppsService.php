<?php

namespace App\Services\System;

use Exception;
use App\Models\Base\User;
use App\Models\System\App;

class AppsService {

    private $user;
    private $app;

    public function __construct(User $user, App $app)
    {
        $this->user = $user;
        $this->app = $app;
    } 

    public function getMenu()
    {
        $user = auth()->user();
        $apps = $this->user->getApps($user->id);
        $tree = $this->appsTree($apps);
        return $tree;
    }

    private function appsTree($apps, $parent_id = null, $tree = [])
    {
        foreach ($apps as $app) {
            if ($app->parent_id === $parent_id) {
                $children = $this->appsTree($apps, $app->id, []);
                $app->children = $children;
                array_push($tree, $app);
            }
        }
        return $tree; 
    }

    public function appList()
    {
        $list = $this->app->all();
        return $list;
    }
}