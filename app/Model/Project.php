<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function tasks()
    {
        return $this->hasMany('App\Model\Task');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
