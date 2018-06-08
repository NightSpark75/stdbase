<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Base\Companies::class, function (Faker $faker) {

    return [
        'id' => guid(),
        'name' => $faker->company,
        'active' => true,
        'created_by' => 'laravel-factory',
        'created_at' => date('Y-m-d H:i:s'),
    ];
});

$factory->define(App\Models\Base\Users::class, function (Faker $faker) {
    $companies_ids = \App\Models\Base\Companies::pluck('id')->toArray();
    return [
        'id' => guid(),
        'account' => $faker->userName,
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => str_random(10),
        'company_id' => $faker->randomElement($companies_ids),
        'active' => true,
        'created_by' => 'laravel-factory',
        'created_at' => date('Y-m-d H:i:s'),
    ];
});