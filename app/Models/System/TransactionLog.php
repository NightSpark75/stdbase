<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Model;

class TransactionLog extends Model
{
    //
    protected $table = 'sys_transaction_log';
    public $incrementing = false;
    public $timestamps = false;
}
