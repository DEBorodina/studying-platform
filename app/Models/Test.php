<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'teacher_id',
    ];

    public function teacher(){
        return $this->belongsTo(User::class,'teacher_id','id');
    }

    public function questions(){
        return $this->hasMany(Question::class,'test_id','id');
    }

    public function students(){
        return $this->belongsToMany(User::class,'tests_and_students','test_id','student_id')->withPivot('score');
    }

}
