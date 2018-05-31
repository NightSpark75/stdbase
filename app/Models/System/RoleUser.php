<?php
namespace App\Models\System;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RoleUser extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_role_user';
    public $incrementing = false;
    public $timestamps = false;

}
