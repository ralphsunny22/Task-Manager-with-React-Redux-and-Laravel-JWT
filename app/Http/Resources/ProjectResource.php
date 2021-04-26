<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'path' => $this->path,
            'description' => $this->description,
            'creator' => $this->user->name,
            'created_at' => $this->created_at->diffForHumans(),

            'tasksCount' => $this->tasks->count(),
            'tasks' => TaskResource::collection($this->tasks),


        ];
    }
}
