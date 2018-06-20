<?php

namespace App\Services\System;

use Exception;
use App\Services\Service;
use App\Models\Base\User;

class usersService extends Service {

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    } 

    public function getUsers()
    {
        $user = $this->user->all();
        return $user;
    }

    public function getUser($id)
    {
        $user = $this->user->find($id);
        return $user;
    }

    public function createUser($params)
    {
        $result = $this->user->create($params);
        return $result;
    }

    public function updateUser($params, $id)
    {
        $result = $this->user->update($params, $id);
        return $result;
    }

    public function destroyUser($id)
    {
        $result = $this->user->destroy($id);
        return $result;
    }
}