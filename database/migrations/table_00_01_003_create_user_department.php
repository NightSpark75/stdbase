<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDepartment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_department', function (Blueprint $table) {
            $table->string('id', 40)->unique();
            $table->string('user_id', 40);
            $table->string('department_id', 40);
            $table->integer('sequence');
            $table->string('created_by', 40);
            $table->datetime('created_at');
            $table->string('deleted_by', 40)->nullable();
            $table->datetime('deleted_at')->nullable();
            
            $table->primary(['user_id', 'department_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_department');
    }
}
