<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSysTransactionLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sys_transaction_log', function (Blueprint $table) {
            $table->bigInteger('transact_seq')->increments();
            $table->string('id', 40);
            $table->string('table_name');
            $table->string('column_name');
            $table->string('old_value');
            $table->string('new_value');
            $table->string('user_id', 40);
            $table->dateTime('transact_at');

            $table->index('id');
            $table->primary('transact_seq');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sys_transaction_log');
    }
}
