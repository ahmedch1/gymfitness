<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adherent extends Model
{
    protected $fillable = ['nom', 'prenom','tel','date_de_naissance'];
}
