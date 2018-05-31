<?php
namespace App\Models\Base;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Departments extends Model
{
    use SoftDeletes;
    
    protected $table = 'departments';
    public $incrementing = false;
    public $timestamps = false;
}
