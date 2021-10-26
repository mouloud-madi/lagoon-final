@extends('layouts.app')
@section('content')
    <style>
        select.form-control, select.asColorPicker-input, .dataTables_wrapper select, .jsgrid .jsgrid-table .jsgrid-filter-row select, .select2-container--default select.select2-selection--single, .select2-container--default .select2-selection--single select.select2-search__field, select.typeahead, select.tt-query, select.tt-hint {
            color: #1F1F1F;
        }
    </style>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-8">
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
            <div class="col-lg-8 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Add new gallery</h4>
                        <p class="card-description">
                            <a href="{{route('gallery.index')}}" class="float-right">
                                <i class="icon-arrow-left"></i> Back
                            </a>
                        </p>
                        <form method="post" action="{{route('gallery.store')}}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label>Category<span class="text-danger">*</span></label>
                                <select class="form-control @error('category_id') is-invalid @enderror"
                                        name="category_id">
                                    @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name_en}}</option>
                                    @endforeach
                                </select>
                                @error('category_id')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label>Gallery <span class="text-danger">*</span></label>
                                <input type="file" class="form-control @error('image_url') is-invalid @enderror"
                                       name="image_url"
                                       value="{{old('image_url')}}">
                                @error('image_url')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class="ti-save"></i> Save
                            </button>
                            <a href="{{route('gallery.index')}}" class="btn btn-light">
                                <i class="icon-arrow-left"></i> Back
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
