<?php

namespace App\Models\Base;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Companies extends Model
{
    use SoftDeletes;
    
    protected $table = 'companies';
    public $incrementing = false;
    public $timestamps = false;
}
