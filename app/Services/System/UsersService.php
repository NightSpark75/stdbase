<?php

namespace App\Services\System;

use Exception;
use App\Models\System\User;

class usersService {

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}