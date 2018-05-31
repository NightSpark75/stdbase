<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSysAppRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sys_app_role', function (Blueprint $table) {
            $table->string('id', 40)->unique();
            $table->string('app_id', 40);
            $table->string('role_id', 40);
            $table->boolean('can_insert')->default(true);
            $table->boolean('can_update')->default(true);
            $table->boolean('can_delete')->default(true);
            $table->string('created_by', 40);
            $table->datetime('created_at');
            $table->string('deleted_by', 40)->nullable();
            $table->datetime('deleted_at')->nullable();

            $table->primary(['app_id', 'role_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sys_app_role');
    }
}
