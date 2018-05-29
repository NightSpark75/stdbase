<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDepartments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->string('id', 40);
            $table->string('department_no', 20)->unique();
            $table->string('name', 20);
            $table->boolean('state');
            $table->string('created_by', 40);
            $table->datetime('created_at');
            $table->string('deleted_by', 40)->nullable();
            $table->datetime('deleted_at')->nullable();

            $table->index('department_no');
            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
