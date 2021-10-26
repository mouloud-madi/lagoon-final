<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();
        return view('pages.categories.index', compact('categories'));
    }

    public function create()
    {
        return view('pages.categories.create');
    }

    public function store(CategoryRequest $request)
    {
        Category::create($request->validated());
        return redirect()->back()->with([
            'message' => 'category add with successfully.',
        ]);
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return view('pages.categories.update', compact('category'));
    }

    public function update(CategoryRequest $request, $id)
    {

        Category::where('id', $id)->update($request->validated());
        return redirect()->route('category.index')->with([
            'message' => 'Category add with successfully.',
        ]);

    }

    public function destroy($id)
    {
        Category::find($id)->delete();
        return redirect()->back()->with([
            'message' => 'Category deleted with successfully.',
        ]);
    }
}
