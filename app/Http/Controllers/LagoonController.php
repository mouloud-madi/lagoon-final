<?php

namespace App\Http\Controllers;

use App\Http\Requests\LagoonRequest;
use App\Models\SiteInformation;

class LagoonController extends Controller
{
    public function index()
    {
        $data = SiteInformation::find(1);
        return view('pages.lagoon.index', compact('data'));
    }

    public function update(LagoonRequest $request)
    {
        SiteInformation::where('id', 1)->update($request->validated());
        return redirect()->back()->with([
            'message' => 'Information updated with successfully.',
        ]);
    }
}
