<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AppRole extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_app_role';
    public $incrementing = false;
    public $timestamps = false;

    public function appInfo()
    {
        return $this->hasOne('App\Models\System\Apps', 'id', 'app_id');
    }
}
