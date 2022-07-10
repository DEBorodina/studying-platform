<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'name'=>'required|string',
            'last_name'=>'required|string',
            'middle_name'=>'required|string',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|string|min:8',
            'role'=>['required', Rule::in([1,2,3])],
        ]);

        $user = User::create([
            'name'=>$fields['name'],
            'last_name'=>$fields['last_name'],
            'middle_name'=>$fields['middle_name'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'role'=>$fields['role'],
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=>$user,
            'token'=>$token,
        ];

        return response($response,201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email'=>'required|email',
            'password'=>'required|string',
        ]);

        $user = User::where('email',$fields['email'])->first();

        if(!$user){
            return response([
                'message'=>'No such user.'
            ],200);
        }
        if(!Hash::check($fields['password'],$user->password)){
            return response([
                'message'=>'Wrong password.'
            ],200);
        }


        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=>$user,
            'token'=>$token,
        ];

        return response($response,201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return [
            'message'=>'logged out',
        ];
    }

}
