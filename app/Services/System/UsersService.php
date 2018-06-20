<?php

namespace App\Services\System;

use Exception;
use App\Models\Base\User;

class usersService {

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}