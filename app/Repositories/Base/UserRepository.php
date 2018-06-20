<?php

namespace App\Repositories\Base;

use DB;
use App\Repositories\Repository;

class UserRepository extends Repository {

    function model()
    {
        return 'App\Models\Base\User';
    }

    public function getApps($id)
    {
        return $this->model->getApps()->where('users.id', $id)->get();
    }
}