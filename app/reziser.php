<?php

namespace App;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reziser extends Model
{
    //use HasFactory;
    public $timestamps = false;
    protected $guarded=[];

    public function reziser(){
        return $this->belongsTo(reziser::class);
    }
}
