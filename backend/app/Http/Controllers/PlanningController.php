<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\PlanningResource;
use App\planning;
use Illuminate\Support\Facades\Validator;

class PlanningController extends Controller
{
    public function index()
    {
        $data = planning::all();
        return response()->json(planning::all(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'libelle_jour' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $planning = planning::create($data);

        return response(['planning' => new PlanningResource($planning), 'message' => 'Created successfully'], 201);
    }

    public function getplanningbyid($id)
    {
        $planning = planning::find($id);
        if (is_null($planning)) {
            return response()->json(['message' => 'planning not found'], 404);
        }
        return response()->json($planning::find($id), 200);


    }

    public function updateplanning(Request $request, $id)
    {
        $planning = planning::find($id);
        if (is_null($planning)) {
            return response()->json(['message' => 'planning not found'], 404);
        }
        $planning->update($request->all());
        return response($planning, 200);
    }


    public function destroy(Request $request, $id)
    {
        $planning = planning::find($id);
        if (is_null($planning)) {
            return response()->json(['message' => 'planning not found'], 404);
        }
        $planning->delete();

        return response(['message' => 'Deleted']);
    }


}
