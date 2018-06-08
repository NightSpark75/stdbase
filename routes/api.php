<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('jwt.auth')->get('users', function (Request $request) {
    return auth()->user();
});

Route::post('auth/login', 'Auth\JwtAuthController@login');

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'auth',
    'namespace' => 'Auth',
], function () {
    Route::post('logout', 'JwtAuthController@logout');
    Route::post('refresh', 'JwtAuthController@refresh');
});

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'sys',
    'namespace' => 'System',
], function () {
    Route::get('apps/list', 'AppsController@list');

    Route::resource('users', 'UsersController');
    Route::get('/users/paginate/{page}', 'UsersController@paginate');
});

Route::get('test', 'System\AppsController@test');