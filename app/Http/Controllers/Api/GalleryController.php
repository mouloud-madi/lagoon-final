<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $data = Gallery::all();
        return response()->json($data);
    }

    public function category()
    {
        $data = Category::all();
        return response()->json($data);
    }
}
