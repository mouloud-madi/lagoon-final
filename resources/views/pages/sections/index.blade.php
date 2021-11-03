@extends('layouts.app')
@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">Home page sections</h3>
                    </div>
                </div>
            </div>
        </div>
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
                @if(session('errors'))
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Error !</strong> Validation errors.
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form method="post" enctype="multipart/form-data" action="{{route('section_update')}}">
                    @csrf
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="card-title">Section one</div>
                            <hr>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Gif(AR) <span class="text-danger">*</span>
                                            @if($data->section_one_gif_ar)
                                                <a href="{{$data->section_one_gif_ar}}" target="-_blank">
                                                    <img src="{{$data->section_one_gif_ar}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_one_gif_ar') is-invalid @enderror"
                                               name="section_one_gif_ar">
                                        @error('section_one_gif_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Gif(EN) <span class="text-danger">*</span>
                                            @if($data->section_one_gif_en)
                                                <a href="{{$data->section_one_gif_en}}" target="-_blank">
                                                    <img src="{{$data->section_one_gif_en}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_one_gif_en') is-invalid @enderror"
                                               name="section_one_gif_en">
                                        @error('section_one_gif_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Image(1) <span class="text-danger">*</span>
                                            @if($data->section_one_image1)
                                                <a href="{{$data->section_one_image1}}" target="-_blank">
                                                    <img src="{{$data->section_one_image1}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_one_image1') is-invalid @enderror"
                                               name="section_one_image1">
                                        @error('section_one_image1')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Image(2) <span class="text-danger">*</span>
                                            @if($data->section_one_image2)
                                                <a href="{{$data->section_one_image2}}" target="-_blank">
                                                    <img src="{{$data->section_one_image2}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_one_image2') is-invalid @enderror"
                                               name="section_one_image2">
                                        @error('section_one_image2')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(AR) <span class="text-danger">*</span></label>
                                        <textarea
                                            rows="4"
                                            class="form-control @error('section_one_description_ar') is-invalid @enderror"
                                            name="section_one_description_ar">{{$data->section_one_description_ar}}</textarea>
                                        @error('section_one_description_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(EN) <span class="text-danger">*</span></label>
                                        <textarea
                                            rows="4"
                                            class="form-control @error('section_one_description_en') is-invalid @enderror"
                                            name="section_one_description_en">{{$data->section_one_description_en}}</textarea>
                                        @error('section_one_description_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="card-title">Section two</div>
                            <hr>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Gif(AR) <span class="text-danger">*</span>
                                            @if($data->section_two_gif_ar)
                                                <a href="{{$data->section_two_gif_ar}}" target="-_blank">
                                                    <img src="{{$data->section_two_gif_ar}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_two_gif_ar') is-invalid @enderror"
                                               name="section_two_gif_ar">
                                        @error('section_two_gif_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Gif(AR) <span class="text-danger">*</span>
                                            @if($data->section_two_gif_en)
                                                <a href="{{$data->section_two_gif_en}}" target="-_blank">
                                                    <img src="{{$data->section_two_gif_en}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_two_gif_en') is-invalid @enderror"
                                               name="section_two_gif_en">
                                        @error('section_two_gif_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(EN) <span class="text-danger">*</span></label>
                                        <textarea
                                            rows="4"
                                            class="form-control @error('section_two_description_ar') is-invalid @enderror"
                                            name="section_two_description_ar">{{$data->section_two_description_ar}}</textarea>
                                        @error('section_two_description_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(EN) <span class="text-danger">*</span></label>
                                        <textarea
                                            rows="4"
                                            class="form-control @error('section_two_description_en') is-invalid @enderror"
                                            name="section_two_description_en">{{$data->section_two_description_en}}</textarea>
                                        @error('section_two_description_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Image <span class="text-danger">*</span>
                                            @if($data->section_two_image)
                                                <a href="{{$data->section_two_image}}" target="-_blank">
                                                    <img src="{{$data->section_two_image}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_two_image') is-invalid @enderror"
                                               name="section_two_image">
                                        @error('section_two_image')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="card-title">Section three</div>
                            <hr>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Title(AR) <span class="text-danger">*</span></label>
                                        <input type="text" value="{{$data->section_three_title_ar}}"
                                               class="form-control @error('section_three_title_ar') is-invalid @enderror"
                                               name="section_three_title_ar">
                                        @error('section_three_title_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Title(EN) <span class="text-danger">*</span></label>
                                        <input type="text" value="{{$data->section_three_title_en}}"
                                               class="form-control @error('section_three_title_en') is-invalid @enderror"
                                               name="section_three_title_en">
                                        @error('section_three_title_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(AR) <span class="text-danger">*</span></label>
                                        <textarea rows="4"
                                                  class="form-control @error('section_three_description_ar') is-invalid @enderror"
                                                  name="section_three_description_ar">{{$data->section_three_description_ar}}</textarea>
                                        @error('section_three_description_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(EN) <span class="text-danger">*</span></label>
                                        <textarea rows="4"
                                                  class="form-control @error('section_three_description_en') is-invalid @enderror"
                                                  name="section_three_description_en">{{$data->section_three_description_en}}</textarea>
                                        @error('section_three_description_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Image <span class="text-danger">*</span>
                                            @if($data->section_three_image)
                                                <a href="{{$data->section_three_image}}" target="-_blank">
                                                    <img src="{{$data->section_three_image}}" class="img-thumbnail ml-3"
                                                         width="100">
                                                </a>
                                            @endif
                                        </label>
                                        <input type="file"
                                               class="form-control @error('section_three_image') is-invalid @enderror"
                                               name="section_three_image">
                                        @error('section_three_image')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">Section four</div>
                            <hr>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Title(AR) <span class="text-danger">*</span></label>
                                        <input type="text" value="{{$data->section_four_title_ar}}"
                                               class="form-control @error('section_four_title_ar') is-invalid @enderror"
                                               name="section_four_title_ar">
                                        @error('section_four_title_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Title(EN) <span class="text-danger">*</span></label>
                                        <input type="text" value="{{$data->section_four_title_en}}"
                                               class="form-control @error('section_four_title_en') is-invalid @enderror"
                                               name="section_four_title_en">
                                        @error('section_four_title_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(AR) <span class="text-danger">*</span></label>
                                        <textarea rows="4"
                                                  class="form-control @error('section_four_description_ar') is-invalid @enderror"
                                                  name="section_four_description_ar">{{$data->section_four_description_ar}}</textarea>
                                        @error('section_four_description_ar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Content(EN) <span class="text-danger">*</span></label>
                                        <textarea rows="4"
                                                  class="form-control @error('section_four_description_en') is-invalid @enderror"
                                                  name="section_four_description_en">{{$data->section_four_description_en}}</textarea>
                                        @error('section_four_description_en')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                           </span>
                                        @enderror
                                    </div>
                                </div>
{{--                                <div class="col-md-6">--}}
{{--                                    <div class="form-group">--}}
{{--                                        <label>Vedio <span class="text-danger">*</span></label>--}}
{{--                                        <input type="file"--}}
{{--                                               class="form-control @error('section_four_vedio') is-invalid @enderror"--}}
{{--                                               name="section_four_vedio">--}}
{{--                                        @error('section_four_vedio')--}}
{{--                                        <span class="invalid-feedback" role="alert">--}}
{{--                                            <strong>{{ $message }}</strong>--}}
{{--                                           </span>--}}
{{--                                        @enderror--}}
{{--                                        @if($data->section_four_vedio)--}}
{{--                                            <video width="320" height="240" controls>--}}
{{--                                                <source src="{{$data->section_three_image}}" type="video/mp4">--}}
{{--                                            </video>--}}
{{--                                        @endif--}}
{{--                                    </div>--}}
{{--                                </div>--}}
                            </div>
                        </div>
                    </div>
                    <div class="float-right mt-3">
                        <button type="submit" class="btn btn-primary">
                            <i class="ti-save"></i> Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
