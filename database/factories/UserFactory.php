<?php

use Faker\Generator as Faker;
use Faker\Factory as TWFaker;

$factory->define(App\Models\Base\Companies::class, function (Faker $faker) {
    $tw_faker = TWFaker::create('zh_TW');     
    return [
        'id' => guid(),
        'name' => $tw_faker->company,
        'active' => true,
        'created_by' => 'laravel-factory',
        'created_at' => date('Y-m-d H:i:s'),
    ];
});

$factory->define(App\Models\Base\Users::class, function (Faker $faker) {
    $tw_faker = TWFaker::create('zh_TW'); 
    $companies_ids = \App\Models\Base\Companies::pluck('id')->toArray();
    return [
        'id' => guid(),
        'account' => $faker->userName,
        'name' => $tw_faker->name,
        'email' => $tw_faker->unique()->safeEmail,
        'password' => str_random(10),
        'company_id' => $tw_faker->randomElement($companies_ids),
        'active' => true,
        'created_by' => 'laravel-factory',
        'created_at' => date('Y-m-d H:i:s'),
    ];
});