<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parameter extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_parameters';
    public $incrementing = false;
    public $timestamps = false;

    public $keyType = 'string';

    protected $hidden = [
        'active',
        'created_at',
        'created_by',
        'deleted_at',
        'deleted_by',
    ];
}
