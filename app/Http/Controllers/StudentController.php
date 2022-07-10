<?php

namespace App\Http\Controllers;

use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StudentController extends Controller
{
    public function student(Request $request){
        $user = auth()->user();
        $results = [];
        foreach ($user->tests as $test){
            $teacher = [
                'name'=>$test->teacher->name,
                'last_name'=>$test->teacher->last_name,
                'middle_name'=>$test->teacher->middle_name,
            ];
            $result = [
                'id'=>$test->id,
                'name'=>$test->name,
                'score'=>$test->pivot->score,
                'teacher'=>$teacher,
            ];
            array_push($results,$result);
        }
        $response = [
            'name' => $user->name,
            'results' => $results,
        ];
        return response($response,200);
    }
    public function test(Request $request){
        $userTests = auth()->user()->tests;
        $code = $request->code;
        $test = Test::where('code','=',$code)->first();
        if(!$test){
            return response([
                'message'=>'not found',
            ],404);
        }
        foreach ($userTests as $userTest){
            if($userTest->id===$test->id){
                return response([
                    'message'=>'already been passed',
                ],403);
            }
        }
        $response = [
            'name'=>$test->name,
            'questions'=>[],
        ];
        $questions=$test->questions;
        foreach ($questions as $question){
            array_push($response['questions'],[
                'question'=>$question->question,
                'id'=>$question->id,
                'answers'=>$question->answers,
            ]);
        }
        return response($response,200);
    }

    public function check(Request $request){

        $answers = $request->answers;
        $code = $request->code;

        $test = Test::where('code','=',$code)->first();
        $questions=$test->questions;

        $points = 0;
        $maxPoints = count($questions);

        foreach ($questions as $question){
           $right = true;
           foreach ($question->answers as $answer){
               if(($answer->is_right && !in_array($answer->id,$answers))||
                   (!$answer->is_right && in_array($answer->id,$answers))){
                   $right = false;
                   break;
               }
           }
           if($right){
               $points++;
           }
        }

        $score = ($points/$maxPoints)*100;
        $user= auth()->user();
        $user->tests()->attach($test->id,['score'=>$score]);
        return response($test,200);
    }
}
