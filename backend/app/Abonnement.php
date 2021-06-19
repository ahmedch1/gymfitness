<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Abonnement extends Model
{
    protected $fillable = ['libelle_abo', 'description_abo','tarif_abo','duree_abo'];
}
