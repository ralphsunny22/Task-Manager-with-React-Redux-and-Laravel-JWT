<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function project()
    {
        return $this->belongsTo('App\Model\Project');
    }

    public function createdBy()
    {
        return $this->belongsTo('App\User', 'created_by');
    }

    public function doneBy()
    {
        return $this->belongsTo('App\User', 'done_by');
    }

    public function getPathAttribute()
    {
        return asset("tasks/$this->slug");
        //return "tasks/$this->slug";
    }
}
