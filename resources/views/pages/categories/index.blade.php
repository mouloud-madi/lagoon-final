@extends('layouts.app')
@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12">
                @if(session('message'))
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Success !</strong> {{session('message')}}
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">Gallery categories</h3>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="justify-content-end d-flex">
                            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                                <a class="btn btn-primary" href="{{route('category.create')}}">
                                    <i class="ti-plus"></i> Add new
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            @if(count($categories) >0)
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Name(AR)</th>
                                    <th>Name(EN)</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($categories as $category)
                                    <tr>
                                        <td>{{$category->name_ar}}</td>
                                        <td>{{$category->name_en}}</td>
                                        <td>
                                            <div class="btn-group">
                                                <button data-toggle="modal" data-target="#modelId-{{$category->id}}"
                                                        class="btn btn-sm btn-primary"><i class="ti-trash"></i></button>
                                                <a href="{{route('category.edit',$category->id)}}"
                                                   class="btn btn-primary btn-sm">
                                                    <i class="ti-pencil"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Modal Confirmation -->
                                    <div class="modal" id="modelId-{{$category->id}}" tabindex="-1" role="dialog"
                                         aria-labelledby="modelTitleId" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Confirmation !</h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Are you sure you want to delete this item?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-light" data-dismiss="modal">
                                                        Cancel
                                                    </button>
                                                    <form method="POST"
                                                          action="{{ route('category.destroy', $category->id) }}">
                                                        @csrf
                                                        <input type="hidden" name="_method" value="DELETE">
                                                        <button type="submit" class="btn btn-primary">
                                                            Delete
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal Confirmation -->
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            @else
                <div class="col-md-12 text-center">
                    <img src="{{asset('images/no-data.png')}}" class="mt-5" width="300">
                </div>
            @endif
        </div>
    </div>
@endsection
