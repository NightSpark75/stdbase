<?php

namespace App\Services\System;

use DB;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\Base\User;

class JwtService {

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
    
    public function login($account, $password)
    {
        try {
            $user = $this->user->authUser($account, $password, true);
            if (! $user) {
                throw new Exception('帳號或密碼錯誤!');
            }
            if (! $token = JWTAuth::fromUser($user)) {
                throw new Exception('Token建立失敗!');
            }
            return ['token' => $token, 'user' => $user];
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            throw new Exception('伺服器錯誤:無法建立Token('.$e->getMessage().')');
        }
    }
}