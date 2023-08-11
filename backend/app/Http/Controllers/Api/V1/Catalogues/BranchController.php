<?php

namespace App\Http\Controllers\Api\V1\Catalogues;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Branch;

class BranchController extends Controller
{
    public function Get()
    {
        $data = Branch::get();
        return Response()->json([
            "data" => $data
        ],201);
    }
}
