@extends('layouts.app')
@section('content')
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
                        <h4 class="card-title">Add new gallery category</h4>
                        <p class="card-description">
                            <a href="{{route('category.index')}}" class="float-right">
                                <i class="icon-arrow-left"></i> Back
                            </a>
                        </p>
                        <form method="post" action="{{route('category.store')}}">
                            @csrf
                            <div class="form-group">
                                <label>Name(AR) <span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('name_ar') is-invalid @enderror"
                                       name="name_ar"
                                       value="{{old('name_ar')}}">
                                @error('name_ar')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label>Name(EN) <span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('name_en') is-invalid @enderror"
                                       name="name_en"
                                       value="{{old('name_en')}}">
                                @error('name_en')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class="ti-save"></i> Save
                            </button>
                            <a href="{{route('category.index')}}" class="btn btn-light">
                                <i class="icon-arrow-left"></i> Back
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
