<?php

namespace App\Models\Base;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;
    
    protected $table = 'departments';
    public $incrementing = false;
    public $timestamps = false;
}