<?php
namespace App\Services\System;

use Exception;
use App\Repositories\Base\UsersRepository as Users;

class UsersService {

    private $users;

    public function __construct(Users $users)
    {
        $this->users = $users;
    } 

    public function getUsers()
    {
        $users = $this->users->all();
        return $users;
    }

    public function getUser($id)
    {
        $user = $this->users->find($id);
        return $user;
    }

    public function createUsers($params)
    {
        $result = $this->users->create($params);
        return $result;
    }

    public function updateUsers($params, $id)
    {
        $result = $this->users->update($params, $id);
        return $result;
    }

    public function deleteUsers($id)
    {
        $result = $this->users->destroy($id);
        return $result;
    }

    public function paginate()
    {   
        $column = ['id', 'account' , 'name', 'email'];
        $result = $this->users->paginate(15, $column);
        return $result;
    }
}