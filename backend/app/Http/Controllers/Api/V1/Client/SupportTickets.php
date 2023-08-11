<?php

namespace App\Http\Controllers\Api\V1\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SupportTicket;

class SupportTickets extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'device' => 'required',
            'description' => 'required',
            'branch_id' => 'required',
            'type_id' => 'required',
            'department_id' => 'required',
        ]);


        $newTicket = new SupportTicket;

        $newTicket->requester_name = $request->name;
        $newTicket->requester_email = $request->email;
        $newTicket->device = $request->device;
        $newTicket->request_description = $request->description;        
        $newTicket->status_id = 1;
        $newTicket->branch_id = $request->branch_id;
        $newTicket->type_id = $request->type_id;
        $newTicket->department_id = $request->department_id;
        
        try{
            $newTicket->save();
        }catch(Exception $exp){
            return Response()->json(["Message"=>"Something went wrong"],500);
        }
        return Response()->json(["Message"=>"Your ticket was created successfully","data"=>$newTicket],200);
    }
}
