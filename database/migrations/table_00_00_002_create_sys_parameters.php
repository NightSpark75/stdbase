<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSysParameters extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sys_parameters', function (Blueprint $table) {
            $table->string('id', 40);
            $table->string('category');
            $table->string('name', 40);
            $table->string('discription', 100);
            $table->string('value');
            $table->boolean('active');
            $table->string('created_by', 40);
            $table->datetime('created_at');
            $table->string('deleted_by', 40)->nullable();
            $table->datetime('deleted_at')->nullable();

            $table->index('category', 'name');
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
        Schema::dropIfExists('sys_parameters');
    }
}
