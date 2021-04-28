<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $with = ['tasks'];

    protected $guarded = [];

    public function tasks()
    {
        return $this->hasMany('App\Model\Task');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getPathAttribute()
    {
        //return asset("projects/$this->slug");
        return "project/$this->slug";
    }
}
