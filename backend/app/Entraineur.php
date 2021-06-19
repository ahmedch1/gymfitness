<?php


namespace App;

use Illuminate\Database\Eloquent\Model;

class Entraineur extends Model
{
    protected $fillable = ['nom', 'tel', 'email'];
}
