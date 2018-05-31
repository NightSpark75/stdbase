<?php
namespace App\Repositories\Base;

use DB;
use App\Repositories\Repository;

class UsersRepository extends Repository {

    function model()
    {
        return 'App\Models\Base\Users';
    }

    public function getApps($id)
    {
        return $this->model->getApps()->where('users.id', $id)->get();
    }
}