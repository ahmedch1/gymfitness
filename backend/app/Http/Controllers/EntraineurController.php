<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\EntraineurResource;
use App\entraineur;
use Illuminate\Support\Facades\Validator;

class EntraineurController extends Controller
{
    public function index()
    {
        $data = entraineur::all();
        return response()->json(entraineur::all(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'nom' => 'required',
            'tel' => 'required',
            'email' => 'required',
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $entraineur = entraineur::create($data);

        return response(['entraineur' => new EntraineurResource($entraineur), 'message' => 'Created successfully'], 201);
    }

    public function getadherentbyid($id)
    {
        $entraineur = entraineur::find($id);
        if (is_null($entraineur)) {
            return response()->json(['message' => 'entraineur not found'], 404);
        }
        return response()->json($entraineur::find($id), 200);


    }

    public function updateentraineur(Request $request, $id)
    {
        $entraineur = entraineur::find($id);
        if (is_null($entraineur)) {
            return response()->json(['message' => 'entraineur not found'], 404);
        }
        $entraineur->update($request->all());
        return response($entraineur, 200);
    }


    public function destroy(Request $request, $id)
    {
        $entraineur = entraineur::find($id);
        if (is_null($entraineur)) {
            return response()->json(['message' => 'entraineur not found'], 404);
        }
        $entraineur->delete();

        return response(['message' => 'Deleted']);
    }


}
