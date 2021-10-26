<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::latest()->get();
        return view('pages.services.index', compact('services'));
    }

    public function create()
    {
        return view('pages.services.create');
    }

    public function store(ServiceRequest $request)
    {
        Service::create($request->validated());
        return redirect()->back()->with([
            'message' => 'Service add with successfully.',
        ]);
    }

    public function edit($id)
    {
        $service = Service::findOrFail($id);
        return view('pages.services.update', compact('service'));
    }

    public function update(ServiceRequest $request, $id)
    {

        Service::where('id', $id)->update($request->validated());
        return redirect()->route('service.index')->with([
            'message' => 'Service add with successfully.',
        ]);

    }

    public function destroy($id)
    {
        Service::find($id)->delete();
        return redirect()->back()->with([
            'message' => 'Service deleted with successfully.',
        ]);
    }
}
