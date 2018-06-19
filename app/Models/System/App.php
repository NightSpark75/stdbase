<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class App extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_apps';
    public $incrementing = false;
    public $timestamps = false;
}
