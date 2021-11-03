<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionRequest;
use App\Models\Section;

class SectionController extends Controller
{
    public function index()
    {
        $data = Section::find(1);
        return view('pages.sections.index', compact('data'));
    }


    public function update(SectionRequest $request)
    {
        Section::where('id', 1)->update($request->validated());
        return redirect()->back()->with([
            'message' => 'Sections updated with successfully.',
        ]);
    }
}
