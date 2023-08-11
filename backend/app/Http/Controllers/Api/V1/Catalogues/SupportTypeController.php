<?php

namespace App\Http\Controllers\Api\V1\Catalogues;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SupportType;

class SupportTypeController extends Controller
{
    public function Get()
    {
        $data = SupportType::get();
        return Response()->json([
            "data" => $data
        ],201);
    }
}
