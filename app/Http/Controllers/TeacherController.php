<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Question;

class TeacherController extends Controller
{
    public function teacher(Request $request){
        $user = auth()->user();
        $response = [
            'name' => $user->name,
            'tests' => $user->tests,
        ];
        return response($response,200);
    }

    public function deleteTest(Request $request){
        $test = Test::find($request->test_id);
        if(!$test){
            return response(['message'=>'not found'], 404);
        }
        if($test->teacher->id!=auth()->user()->id){
            return response(['message'=>'forbidden'], 403);
        }
        $test->students()->detach();
        $questions = $test->questions;
        foreach ($questions as $question){
            $question->answers()->delete();
            $question->delete();
        }
        $test->delete();
        return response([], 200);
    }

    public function createTest(Request $request){
            $test = Test::create([
                'name' => $request->name,
                'code' => rand(1000000, 9999999),
                'teacher_id' => auth()->user()->id,
            ]);
            $createdQuestions = [];
            $createdAnswers = [];
            foreach ($request->questions as $question) {;
                array_push($createdQuestions,Question::create([
                    'question' => $question['question'],
                    'test_id' => $test->id,
                ]));
               foreach ($question['answers'] as $answer){
                      array_push(  $createdAnswers,Answer::create([
                       'answer'=>$answer['answer'],
                       'question_id'=>$createdQuestions[count($createdQuestions)-1]->id,
                       'is_right'=>boolval($answer['is_right']),
                   ]));
                  }
            }
            return response([
                'test'=>$test,
                'questions'=>$createdQuestions,
                'answer'=>$createdAnswers,
            ],200);
        }

    public function viewTest(Request $request){
        $response = [];
        $test = Test::find($request->test_id);
        if(!$test){
            return response(['message'=>'not found'], 404);
        }
        if($test->teacher->id!=auth()->user()->id){
            return response(['message'=>'forbidden'], 403);
        }
        $response['name']=$test->name;
        $response['questions']=$test->questions;
        foreach ($response['questions'] as $question){
            $question['answers']=$question->answers;
        }
        return response($response,200);
    }

    public function resultsTest(Request  $request){
        $response = ['students'=>[],'name'=>''];
        $test = Test::find($request->test_id);
        if(!$test){
            return response(['message'=>'not found'], 404);
        }
        if($test->teacher->id!=auth()->user()->id){
            return response(['message'=>'forbidden'], 403);
        }
        $response['name'] = $test['name'];
        $students=$test->students;
        foreach ($students as $student){
            array_push($response['students'],[
                'last_name'=>$student['last_name'],
                'name'=>$student['name'],
                'middle_name'=>$student['middle_name'],
                'score'=>$student['pivot']['score'],
                'id'=>$student['id'],
            ]);
        }
        return response($response,200);
    }
}
