<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Activite;

class ActiviteController extends Controller
{
    public function getActivite(){
    return response()->json(Activite::all(),200);
    }
    public function getActivitebyid(){
        $activite = Activite::find($id);
        if(is_null($activite)){
            return response()->json(['message' => 'Activite not Found'],404);
        }
        return response()->json($activite::find($id),200);
    }
   
}
