<?php
namespace App\Services\System;

use DB;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Repositories\Base\UsersRepository as Users;

class JwtService {

    private $users;

    public function __construct(Users $users)
    {
        $this->users = $users;
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
            $user = $this->users->search($where)->first();
            if (! $user) {
                throw new Exception('帳號或密碼錯誤!');
            }
            $payload = [
                'account' => $user->account,
                'name' => $user->name,
            ];
            if (! $token = JWTAuth::fromUser($user, $payload)) {
                throw new Exception('Token建立失敗!');
            }
            return $token;
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            throw new Exception('伺服器錯誤:無法建立Token('.$e->getMessage().')');
        }
    }
}