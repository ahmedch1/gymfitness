<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AbonnementResource;
use App\abonnement;
use Illuminate\Support\Facades\Validator;

class AbonnementController extends Controller
{
    public function index()
    {
        $data = abonnement::all();
        return response()->json(abonnement::all(),200);
    }
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'libelle_abo'=>'required',
            'description_abo'=>'required',
            'tarif_abo'=>'required',
            'duree_abo'=>'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $abonnement = abonnement::create($data);

        return response(['abonnement' => new AbonnementResource($abonnement), 'message' => 'Created successfully'], 201);
    }
    public function getabonnementbyid($id){
        $abonnement = abonnement::find($id);
        if(is_null($abonnement)){
            return response()-> json(['message' => 'abonnement not found'],404);
        }
        return response()->json($abonnement::find($id),200);


    }
    public function updateabonnement(Request $request,$id)
    {
        $abonnement = abonnement::find($id);
        if(is_null($abonnement)){
            return response()-> json(['message' => 'abonnement not found'],404);
        }
        $abonnement ->update($request->all());
        return response($abonnement,200);
    }


    public function destroy(Request $request,$id)
    {
        $abonnement = abonnement::find($id);
        if(is_null($abonnement)){
            return response()-> json(['message' => 'abonneemtn not found'],404);
        }
        $abonnement->delete();

        return response(['message' => 'Deleted']);
    }


}
