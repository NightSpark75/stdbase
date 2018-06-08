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
        $this->createSystemData($faker);
    }

    private function createSystemData($faker) 
    {
        $this->createAdministrator($faker);
        $this->createApps();
        $this->createRole();
        $this->createNormalRole();
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
            'password' => 'administrator',
            'company_id' => $company_id,
            'active' => true,
            'created_by' => 'laravel-seed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
    }

    private function createApps()
    {
        $app_id = guid();
        $par = [
            'id' => $app_id, 
            'path' => '/sys', 
            'name' => '系統管理', 
            'icon' => 'fas fa-cog', 
            'component' => null, 
            'parent_id' => null, 
            'seq' => 999999999, 
            'active' => true, 
            'created_by' => 'laravel-seed', 
            'created_at' => date('Y-m-d H:i:s')
        ];
        DB::table('sys_apps')->insert($par);
        $apps = [
            ['/sys/users', '使用者管理', 'fas fa-users', 'users', $app_id, 1],
            ['/sys/companies', '公司管理', 'far fa-building', 'companies', $app_id, 2],
            ['/sys/departments', '組識管理', 'fas fa-sitemap', 'departments', $app_id, 3],
            ['/sys/apps', '路由管理', 'fas fa-road', 'apps', $app_id, 4],
            ['/sys/roles', '角色管理', 'fas fa-user-tag', 'roles', $app_id, 5],
            ['/sys/parameters', '參數管理', 'fas fa-cogs', 'parameters', $app_id, 6],
            ['', '人事基本資料', 'fas fa-user-edit', '', '', 999999100],
        ];
        foreach ($apps as $app) {
            DB::table('sys_apps')->insert([
                'id' => guid(),
                'path' => $app[0],
                'name' => $app[1],
                'icon' => $app[2],
                'component' => $app[3],
                'parent_id' => $app[4],
                'seq' => $app[5],
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
        $apps = DB::table('sys_apps')->where('path', 'like', '/sys%')->get()->toArray();
        foreach ($apps as $app) {
            if ($app->component !== 'companies' && $app->component !== 'departments') {
                DB::table('sys_app_role')->insert([
                    'id' => guid(),
                    'app_id' => $app->id,
                    'role_id' => $role_id,
                    'created_by' => 'laravel-seed',
                    'created_at' => date('Y-m-d H:i:s'),
                ]);
            }
        }
    }

    private function createNormalRole()
    {
        $role_id = guid();
        DB::table('sys_roles')->insert([
            'id' => $role_id,
            'name' => 'normal',
            'discription' => 'normal role',
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
        $apps = DB::table('sys_apps')->where('path', 'like', '/sys%')->get()->toArray();
        foreach ($apps as $app) {
            if ($app->component === 'companies' || $app->component === 'departments') {
                DB::table('sys_app_user')->insert([
                    'id' => guid(),
                    'app_id' => $app->id,
                    'user_id' => $user_id,
                    'created_by' => 'laravel-seed',
                    'created_at' => date('Y-m-d H:i:s'),
                ]);
            }
        }
    }
}
