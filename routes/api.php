<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/projects', 'TaskManagerController@allProjects')->name('allProjects');
Route::post('/project', 'TaskManagerController@addProject')->name('addProject');
Route::get('project/{project}', 'TaskManagerController@singleProject')->name('singleProject');
Route::post('project/{project}', 'TaskManagerController@markProjectAsCompleted')->name('markProjectAsCompleted');



Route::post('tasks', 'TaskManagerController@addTask');
Route::get('tasks/{task}', 'TaskManagerController@singleTask')->name('singleTask');
Route::post('tasks/{task}', 'TaskManagerController@markTaskAsCompleted')->name('markTaskAsCompleted');

//jwt
// Route::group([

//     'middleware' => 'api',
//     'prefix' => 'auth'

// ], function ($router) {

//     Route::post('login', 'AuthController@login');
//     Route::post('register', 'AuthController@register');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');
// });

Route::post('/register', 'AuthController@register')->name('register');
Route::post('/login', 'AuthController@login')->name('login');
Route::get('/user', 'AuthController@user')->name('user');
Route::get('/logout', 'AuthController@logout')->name('logout');
