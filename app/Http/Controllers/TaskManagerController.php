<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Model\Project;
use App\Model\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class TaskManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allProjects()
    {
        // $projects = Project::where('is_completed', false)
        //     ->orderBy('created_at', 'desc')
        //     ->withCount(['tasks' => function ($query) {
        //         $query->where('is_completed', false);
        //     }])
        //     ->get();

        //return $projects->toJson();
        return ProjectResource::collection(Project::orderBy('created_at', 'desc')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addProject(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ]);

        $now = time();

        $project = Project::create([
            'name' => $validatedData['name'],
            'slug' => Str::slug($validatedData['name'] . '' . $now),
            'description' => $validatedData['description'],
            'user_id' => $validatedData['user_id'],
        ]);

        return response()->json('Project created!');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addTask(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'project_id' => 'required',
            'created_by' => 'required'
        ]);

        $now = time();

        $task = Task::create([
            'title' => $validatedData['title'],
            'slug' => Str::slug($validatedData['title'] . '' . $now),
            'project_id' => $validatedData['project_id'],
            'created_by' => $validatedData['created_by'],


        ]);

        //return response()->json('Task created!');
        return response([
            'message' => 'Task Created Successfully',
            'data' => new TaskResource($task), 'status' => Response::HTTP_CREATED
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function singleProject(Project $project)
    {
        // $project = Project::with(['tasks' => function ($query) {
        //     $query->where('is_completed', false);
        // }])->find($slug);

        //return $project->toJson();

        return new ProjectResource($project);
    }

    public function singleTask(Task $task)
    {
        // $project = Project::with(['tasks' => function ($query) {
        //     $query->where('is_completed', false);
        // }])->find($slug);

        //return $project->toJson();

        return new TaskResource($task);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function markProjectAsCompleted(Project $project)
    {
        $project->is_completed = true;
        $project->update();

        //return response()->json('Project updated!');
        return new ProjectResource($project);
    }

    public function markTaskAsCompleted(Task $task)
    {
        $task->is_completed = true;
        $task->update();

        //return response()->json('Project updated!');
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
