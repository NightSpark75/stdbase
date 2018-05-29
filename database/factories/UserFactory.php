<?php

use Faker\Generator as Faker;

// $factory->define(App\Models\Base\Companies::class, function (Faker $faker) {
//     return [
//         'id' => str_random(10),
//         'name' => $faker->name,
//         'id' => guid(),
//         'state' => 'Y',
//         'created_by' => 'laravel-seed',
//         'created_at' => date('Y-m-d H:i:s'),
//     ];
// });

// $factory->define(App\Models\Base\Users::class, function (Faker $faker) {
//     $companies_ids = \App\Models\Base\Companies::pluck('id')->toArray();
//     return [
//         'id' => str_random(10),
//         'name' => $faker->name,
//         'email' => $faker->unique()->safeEmail,
//         'password' => str_random(10),
//         'company_id' => $faker->randomElement($companies_ids),
//         'id' => guid(),
//         'state' => 'Y',
//         'created_by' => 'laravel-seed',
//         'created_at' => date('Y-m-d H:i:s'),
//     ];
// });