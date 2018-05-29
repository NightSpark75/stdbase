<?php

use Illuminate\Database\Seeder;
//use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('zh_TW');
        // factory(App\Models\Base\Companies::class, 5)->create();
        // factory(App\Models\Base\Users::class, 20)->create();
        
        $this->createSystemData($faker);
    }

    private function createSystemData($faker) 
    {
        $this->createAdministrator($faker);
        $this->createRoutes();
        $this->createRole();
    }

    private function createSystemCompany() 
    {
        DB::table('companies')->insert([
            'id' => guid(),
            'name' => 'system',
            'active' => true,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
    }

    private function createAdministrator($faker)
    {
        $company_id = guid();
        DB::table('companies')->insert([
            'id' => $company_id,
            'name' => 'system',
            'active' => true,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id' => guid(),
            'account' => 'administrator',
            'name' => 'administrator',
            'email' => $faker->unique()->safeEmail,
            'password' => $faker->randomNumber(),
            'company_id' => $company_id,
            'active' => true,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
    }

    private function createRoutes()
    {
        $sys_id = guid();
        $routes = [
            ['/sys', '系統管理', 'fas fa-users', null, null, 999999999],
            ['/sys/users', '使用者管理', 'fas fa-users', 'users', $sys_id, 1],
            ['/sys/companies', '公司管理', 'far fa-building', 'companies', $sys_id, 2],
            ['/sys/departments', '組識管理', 'fas fa-sitemap', 'departments', $sys_id, 3],
            ['/sys/routes', '路由管理', 'fas fa-road', 'routes', $sys_id, 4],
            ['/sys/roles', '角色管理', 'fas fa-user-tag', 'roles', $sys_id, 5],
            ['/sys/parameters', '參數管理', 'fas fa-cogs', 'parameters', $sys_id, 6],
        ];

        foreach ($routes as $route) {
            DB::table('sys_routes')->insert([
                'id' => guid(),
                'path' => $route[0],
                'name' => $route[1],
                'icon' => $route[2],
                'component' => $route[3],
                'parent_id' => $route[4],
                'sequence' => $route[5],
                'active' => true,
                'created_by' => 'laravel-seed',
                'created_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }

    private function createRole()
    {
        $role_id = guid();
        DB::table('sys_roles')->insert([
            'id' => $role_id,
            'name' => 'system',
            'discription' => 'system administrators',
            'active' => true,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
        $user_id = DB::table('users')->where('account', 'administrator')->first()->id;
        DB::table('sys_role_user')->insert([
            'id' => guid(),
            'role_id' => $role_id,
            'user_id' => $user_id,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
        $routes = DB::table('sys_routes')->where('path', 'like', '/sys%')->get()->toArray();
        foreach ($routes as $route) {
            DB::table('sys_route_role')->insert([
                'id' => guid(),
                'route_id' => $route->id,
                'role_id' => $role_id,
                'created_by' => 'laravel-seed',
                'created_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
