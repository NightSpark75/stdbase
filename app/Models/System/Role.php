<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_roles';
    public $incrementing = false;
    public $timestamps = false;

    public function apps()
    {
        return $this->belongsToMany('App\Models\System\App', 'sys_app_role', 'role_id', 'app_id', 'id');
    }
}
