<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Roles extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_roles';
    public $incrementing = false;
    public $timestamps = false;

    public function apps()
    {
        return $this->belongsToMany('App\Models\System\Apps', 'sys_app_role', 'role_id', 'app_id', 'id');
    }
}
