<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSysRoutes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sys_routes', function (Blueprint $table) {
            $table->string('id', 40);
            $table->string('path', 40)->unique();
            $table->string('name', 40);
            $table->string('icon', 40);
            $table->string('component', 40)->nullable()->unique();
            $table->string('parent_id', 40)->nullable();
            $table->integer('sequence');
            $table->boolean('active');
            $table->string('created_by', 40);
            $table->datetime('created_at');
            $table->string('deleted_by', 40)->nullable();
            $table->datetime('deleted_at')->nullable();
            
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
        Schema::dropIfExists('sys_routes');
    }
}