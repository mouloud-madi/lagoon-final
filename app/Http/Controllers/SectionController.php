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
        $data = $request->validated();
        if ($request->section_one_gif_ar) {
            $imageName = time() . '.' . $request->section_one_gif_ar->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_one_gif_ar->move(public_path('uploads/sections'), $imageName);
            $data['section_one_gif_ar'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_one_gif_en) {
            $imageName = time() . '.' . $request->section_one_gif_en->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_one_gif_en->move(public_path('uploads/sections'), $imageName);
            $data['section_one_gif_en'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_one_image1) {
            $imageName = time() . '.' . $request->section_one_image1->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_one_image1->move(public_path('uploads/sections'), $imageName);
            $data['section_one_image1'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_one_image2) {
            $imageName = time() . '.' . $request->section_one_image2->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_one_image2->move(public_path('uploads/sections'), $imageName);
            $data['section_one_image2'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_two_gif_ar) {
            $imageName = time() . '.' . $request->section_two_gif_ar->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_two_gif_ar->move(public_path('uploads/sections'), $imageName);
            $data['section_two_gif_ar'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_two_gif_en) {
            $imageName = time() . '.' . $request->section_two_gif_en->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_two_gif_en->move(public_path('uploads/sections'), $imageName);
            $data['section_two_gif_en'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_two_image) {
            $imageName = time() . '.' . $request->section_two_image->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_two_image->move(public_path('uploads/sections'), $imageName);
            $data['section_two_image'] = env('APP_URL') . $path . $imageName;
        }
        if ($request->section_three_image) {
            $imageName = time() . '.' . $request->section_three_image->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $request->section_three_image->move(public_path('uploads/sections'), $imageName);
            $data['section_three_image'] = env('APP_URL') . $path . $imageName;
        }
        Section::where('id', 1)->update($data);
        return redirect()->back()->with([
            'message' => 'Sections updated with successfully.',
        ]);
    }
}
