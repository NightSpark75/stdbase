<?php

namespace App\Models\System;

use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class App extends Model
{
    use SoftDeletes;
    
    protected $table = 'sys_apps';
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

    public function model() 
    {
        return $this;
    }
    
    public function getParentId($seq)
    {
        $a = (int) (substr($seq, 0, 3).'000000');
        $b = (int) (substr($seq, 0, 6).'000');
        $parent = $this->where('seq', $b)->where('seq', '<>', $seq)->first();
        if ($parent) {
            return $parent->id;
        }
        $parent = $this->where('seq', $a)->where('seq', '<>', $seq)->first();
        if ($parent) {
            $parent->id;
        }
        return null;
    }
}
