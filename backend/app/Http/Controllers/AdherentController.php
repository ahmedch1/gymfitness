<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AdherentResource;
use App\adherent;
use Illuminate\Support\Facades\Validator;

class AdherentController extends Controller
{
    public function index()
    {
        $data = adherent::all();
        return response()->json(adherent::all(),200);
    }
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'nom'=>'required',
            'prenom'=>'required',
            'tel'=>'required',
'date_de_naissance'=>'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $adherent = adherent::create($data);

        return response(['adherent' => new AdherentResource($adherent), 'message' => 'Created successfully'], 201);
    }
    public function getadherentbyid($id){
        $adherent = adherent::find($id);
        if(is_null($adherent)){
            return response()-> json(['message' => 'adherent not found'],404);
        }
        return response()->json($adherent::find($id),200);


    }
    public function updateadherent(Request $request,$id)
    {
        $adherent = adherent::find($id);
        if(is_null($adherent)){
            return response()-> json(['message' => 'adherent not found'],404);
        }
        $adherent ->update($request->all());
        return response($adherent,200);
    }


    public function destroy(Request $request,$id)
    {
        $adherent = adherent::find($id);
        if(is_null($adherent)){
            return response()-> json(['message' => 'adherent not found'],404);
        }
        $adherent->delete();

        return response(['message' => 'Deleted']);
    }


}
