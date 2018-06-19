<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parameters extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_parameters';
    public $incrementing = false;
    public $timestamps = false;
}
