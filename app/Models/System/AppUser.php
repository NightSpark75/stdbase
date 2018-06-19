<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AppUser extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_app_user';
    public $incrementing = false;
    public $timestamps = false;
}
