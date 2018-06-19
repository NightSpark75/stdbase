<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Controllers\Controller;
use App\Services\System\JwtService;

class JwtAuthController extends Controller
{
    private $jwt;

    public function __construct(JwtService $jwt)
    {
        $this->jwt = $jwt;
    }

    public function login(Request $request)
    {
        try {
            $account = $request->input('account');
            $password = $request->input('password');
            $result = $this->jwt->login($account, $password);
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    public function logout(Request $request)
    {
        try {
            auth()->logout();
            return response()->json(['message' => 'Successfully logged out'], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    public function refresh()
    {
        try {
            $token = auth()->parseToken()->refresh();
            $user = auth()->user();
            return response()->json(compact('token', 'user'), 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
}
