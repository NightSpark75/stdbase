<?php

namespace App\Services\System;

use Exception;
use App\Repositories\Base\UsersRepository as Users;

class AppsService {

    private $users;

    public function __construct(Users $users)
    {
        $this->users = $users;
    } 

    public function getApps()
    {
        $user = auth()->user();
        $apps = $this->users->getApps($user->id);
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
}