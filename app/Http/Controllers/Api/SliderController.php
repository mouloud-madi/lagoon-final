<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;

class SliderController extends Controller
{
    public function index()
    {
        $data = Slider::all();
        return response()->json($data);
    }
}
