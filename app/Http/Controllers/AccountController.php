<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function index()
    {
        return view('pages.account.index');
    }

    public function updateAccount(Request $request)
    {
        $request->validate([
            'name' => 'required|min:4|max:191',
            'email' => 'required|email|min:6|max:191',
        ]);
        User::find(auth()->user()->id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        return redirect()->back()->with([
            'message' => 'Your account change successfully.'
        ]);
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword()],
            'new_password' => 'required|min:6|max:20',
            'new_confirm_password' => ['same:new_password'],
        ]);
        User::find(auth()->user()->id)->update(['password' => Hash::make($request->new_password)]);
        return redirect()->back()->with([
            'message' => 'Your password change successfully.'
        ]);
    }
}
