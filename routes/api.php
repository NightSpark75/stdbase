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

// auth
Route::post('auth/login', 'Auth\JwtAuthController@login');

// auth
Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'auth',
    'namespace' => 'Auth',
], function () {
    Route::post('logout', 'JwtAuthController@logout');
    Route::post('refresh', 'JwtAuthController@refresh');
});

// sys
Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'sys',
    'namespace' => 'System',
], function () {
    // apps
    Route::get('apps/list', 'AppsController@list');

    // users
    Route::get('/users/paginate', 'UsersController@paginate')->name('users.paginate');
    Route::resource('users', 'UsersController', 
        ['only' => ['index', 'show', 'store', 'edit', 'update', 'destroy']]);
});

// test
Route::get('test', 'System\AppsController@test');