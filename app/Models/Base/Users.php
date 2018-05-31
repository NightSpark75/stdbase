<?php

namespace App\Models\Base;

use Illuminate\Database\Eloquent\Model;
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
        return $this->belongsToMany('App\Models\System\Roles', 'sys_role_user', 'user_id', 'role_id', 'id');
    }

    public function apps()
    {
        return $this->hasManyThrough('App\Models\System\AppRole', 'App\Models\System\RoleUser', 'user_id', 'role_id', 'id', 'role_id');
    }
}
