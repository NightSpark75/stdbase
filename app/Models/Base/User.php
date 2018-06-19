<?php

namespace App\Models\Base;

use App\Models\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;

    protected $table = 'users';
    public $incrementing = false;
    public $timestamps = false;

    protected $hidden = [
        'password',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function roles()
    {
        return $this->belongsToMany('App\Models\System\Roles', 'sys_role_user', 
            'user_id', 'role_id', 'id');
    }

    public function apps()
    {
        return $this->hasManyThrough('App\Models\System\AppRole', 
            'App\Models\System\RoleUser', 'user_id', 'role_id', 'id', 'role_id');
    }

    public function getApps()
    {
        $appsByRole = $this
            ->join('sys_role_user', 'users.id', 'sys_role_user.user_id')
            ->join('sys_app_role', 'sys_app_role.role_id', 'sys_role_user.role_id')
            ->join('sys_apps', 'sys_apps.id', 'sys_app_role.app_id')
            ->where('sys_apps.active', true)
            ->select('sys_apps.id', 'sys_apps.path', 'sys_apps.name', 
                'sys_apps.icon', 'sys_apps.seq', 'sys_apps.parent_id');
        $apps = $this
            ->join('sys_app_user', 'users.id', 'sys_app_user.user_id')
            ->join('sys_apps', 'sys_apps.id', 'sys_app_user.app_id')
            ->where('sys_apps.active', true)
            ->union($appsByRole)
            ->select('sys_apps.id', 'sys_apps.path', 'sys_apps.name', 
                'sys_apps.icon', 'sys_apps.seq', 'sys_apps.parent_id')
            ->orderBy('seq');
        return $apps;
    }
}
