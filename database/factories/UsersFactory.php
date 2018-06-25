<?php

use Faker\Generator as Faker;
use Faker\Factory as TWFaker;

$factory->define(App\Models\System\User::class, function (Faker $faker) {
    $tw_faker = TWFaker::create('zh_TW'); 
    return [
        'id' => guid(),
        'account' => $faker->userName,
        'name' => $tw_faker->name,
        'email' => $tw_faker->unique()->safeEmail,
        'password' => str_random(10),
        'active' => true,
        'created_by' => 'laravel-factory',
        'created_at' => date('Y-m-d H:i:s'),
    ];
});