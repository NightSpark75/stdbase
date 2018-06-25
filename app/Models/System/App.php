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
    
    public function getParentId($seq)
    {
        $a = (int) (substr($seq, 0, 3).'000000');
        $b = (int) (substr($seq, 0, 6).'000');
        $parent_id = $this->where('seq', $b)->first()->id;
        if ($parent_id) {
            return $parent_id;
        }
        return $parent_id = $this->where('seq', $a)->first()->id;
    }
}
