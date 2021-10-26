<?php

namespace App\Http\Controllers;

use App\Http\Requests\SliderRequest;
use App\Models\Slider;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::all();
        return view('pages.sliders.index', compact('sliders'));
    }

    public function create()
    {
        $sliders = Slider::all();
        return view('pages.sliders.create', compact('sliders'));
    }

    public function store(SliderRequest $request)
    {
        Slider::create($request->validated());
        return redirect()->back()->with([
            'message' => 'Slider add with successfully.',
        ]);
    }


    public function destroy($id)
    {
        Slider::find($id)->delete();
        return redirect()->back()->with([
            'message' => 'Slider deleted with successfully.',
        ]);
    }
}
