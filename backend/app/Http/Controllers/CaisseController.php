<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\CaisseResource;
use App\caisse;
use Illuminate\Support\Facades\Validator;

class CaisseController extends Controller
{
    public function index()
    {
        $data = caisse::all();
        return response()->json(caisse::all(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'nom' => 'required',
            'type' => 'required',
            'montant' => 'required',
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $caisse = caisse::create($data);

        return response(['caisse' => new CaisseResource($caisse), 'message' => 'Created successfully'], 201);
    }

    public function getcaissebyid($id)
    {
        $caisse = caisse::find($id);
        if (is_null($caisse)) {
            return response()->json(['message' => 'caisse not found'], 404);
        }
        return response()->json($caisse::find($id), 200);


    }

    public function updatecaisse(Request $request, $id)
    {
        $caisse = caisse::find($id);
        if (is_null($caisse)) {
            return response()->json(['message' => 'caisse not found'], 404);
        }
        $caisse->update($request->all());
        return response($caisse, 200);
    }


    public function destroy(Request $request, $id)
    {
        $caisse = caisse::find($id);
        if (is_null($caisse)) {
            return response()->json(['message' => 'caisse not found'], 404);
        }
        $caisse->delete();

        return response(['message' => 'Deleted']);
    }


}
