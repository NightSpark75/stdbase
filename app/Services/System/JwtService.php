<?php

namespace App\Services\System;

use DB;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Repositories\Base\UserRepository as User;

class JwtService {

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
    
    public function login($account, $password)
    {
        try {
            // attempt to verify the credentials and create a token for the user
            $where = [
                ['account' , '=' , $account],
                ['password', '=', $password],
                ['active', '=', true],
            ];
            $user = $this->user->search($where)->first();
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