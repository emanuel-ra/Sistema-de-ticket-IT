<?php

namespace App\Http\Controllers\Api\V1\Catalogues;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function Get()
    {
        $data = Department::get();
        return Response()->json([
            "data" => $data
        ],201);
    }
}
