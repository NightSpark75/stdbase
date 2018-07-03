<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;

class Model extends EloquentModel
{
    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    public function post($params)
    {
        $params['id'] = guid();
        $params['active'] = true;
        $params['created_by'] = auth()->user()->id;
        $params['created_at'] = now();
        $this->model->insert($params);
    }

    public function patch($params, $id)
    {
        unset($params['id']);
        $prams['created_by'] = auth()->user()->id;
        $params['created_at'] = now();
        $this->model->where('id', $id)->update($params);
    }
}