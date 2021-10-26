<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use App\Models\SiteInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        $email = SiteInformation::find(1);
        $request->validate([
            'name' => 'required|min:4|max:191',
            'email' => 'required|email|min:8|max:191',
            'message' => 'required|min:8',
        ]);
        $details = [
            'subject' => 'Lagoon web site',
            'text' => '<strong> Name : </strong>' . $request->name . '<br>' . $request->message . '',
        ];
        Mail::to($email->email)->send(new SendMail($details));
        return true;
    }
}
