<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Models\Category;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::with('category')->latest()->paginate(16);
        return view('pages.galleries.index', compact('galleries'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('pages.galleries.create', compact('categories'));
    }

    public function store(GalleryRequest $request)
    {
        Gallery::create($request->validated());
        return redirect()->back()->with([
            'message' => 'Gallery add with successfully.',
        ]);
    }


    public function destroy($id)
    {
        Gallery::find($id)->delete();
        return redirect()->back()->with([
            'message' => 'Gallery deleted with successfully.',
        ]);
    }
}
