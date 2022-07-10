<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Models\User;
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

//public routes
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
//Route::post('/test',[TeacherController::class,'test']);

//protected routes
Route::group(['middleware'=>['auth:sanctum']], function () {
    Route::get('/logout',[AuthController::class,'logout']);

    Route::get('/teacher',[TeacherController::class,'teacher'])->middleware('teacher');
    Route::get('/teacher/test/view/{test_id}',[TeacherController::class,'viewTest'])->middleware('teacher');
    Route::get('/teacher/test/results/{test_id}',[TeacherController::class,'resultsTest'])->middleware('teacher');
    Route::delete('/teacher/test/delete/{test_id}',[TeacherController::class,'deleteTest'])->middleware('teacher');
    Route::post('/teacher/test/create/',[TeacherController::class,'createTest'])->middleware('teacher');

    Route::get('/student',[StudentController::class,'student'])->middleware('student');
    Route::get('/student/test/{code}',[StudentController::class,'test'])->middleware('student');
    Route::post('/student/test/check/{code}',[StudentController::class,'check'])->middleware('student');
});
