@extends('layouts.app')
@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">Web site info</h3>
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
                <form method="post" action="{{route('lagoon-design.update')}}">
                    @csrf
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label>Latitude</label>
                                            <input type="text"
                                                   class="form-control @error('latitude') is-invalid @enderror"
                                                   name="latitude"
                                                   value="{{$data->latitude}}">
                                            @error('latitude')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Longitude</label>
                                        <input type="text" class="form-control @error('longitude') is-invalid @enderror"
                                               name="longitude"
                                               value="{{$data->longitude}}">
                                        @error('longitude')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Mail contact (1)</label>
                                        <input type="email"
                                               class="form-control @error('contact_email1') is-invalid @enderror"
                                               name="contact_email1"
                                               value="{{$data->contact_email1}}">
                                        @error('contact_email1')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Mail contact (2)</label>
                                        <input type="email"
                                               class="form-control @error('contact_email2') is-invalid @enderror"
                                               name="contact_email2"
                                               value="{{$data->contact_email2}}">
                                        @error('contact_email2')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Received Mail <span class="text-danger">*</span></label>
                                        <input type="text"
                                               class="form-control @error('received_email') is-invalid @enderror"
                                               name="received_email"
                                               value="{{$data->received_email}}">
                                        @error('received_email')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Phone (1) <span class="text-danger">*</span></label>
                                        <input type="text"
                                               class="form-control @error('phone1') is-invalid @enderror"
                                               name="phone1"
                                               value="{{$data->phone1}}">
                                        @error('phone1')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Phone (2)</label>
                                        <input type="text"
                                               class="form-control @error('phone2') is-invalid @enderror"
                                               name="phone2"
                                               value="{{$data->phone2}}">
                                        @error('phone2')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Address (AR) <span class="text-danger">*</span></label>
                                        <input type="text"
                                               class="form-control @error('address_ar') is-invalid @enderror"
                                               name="address_ar"
                                               value="{{$data->address_ar}}">
                                        @error('address_ar')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Address (EN) <span class="text-danger">*</span></label>
                                        <input type="text"
                                               class="form-control @error('address_en') is-invalid @enderror"
                                               name="address_en"
                                               value="{{$data->address_en}}">
                                        @error('address_en')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Facebook</label>
                                        <input type="text"
                                               class="form-control @error('facebook') is-invalid @enderror"
                                               name="facebook"
                                               value="{{$data->facebook}}">
                                        @error('facebook')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Instagram</label>
                                        <input type="text"
                                               class="form-control @error('instagram') is-invalid @enderror"
                                               name="instagram"
                                               value="{{$data->instagram}}">
                                        @error('instagram')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Linkedin</label>
                                        <input type="text"
                                               class="form-control @error('linkedin') is-invalid @enderror"
                                               name="linkedin"
                                               value="{{$data->linkedin}}">
                                        @error('linkedin')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Youtube</label>
                                        <input type="text"
                                               class="form-control @error('youtube') is-invalid @enderror"
                                               name="youtube"
                                               value="{{$data->youtube}}">
                                        @error('youtube')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Google Api Key</label>
                                        <input type="text"
                                               class="form-control @error('maps_key') is-invalid @enderror"
                                               name="maps_key"
                                               value="{{$data->maps_key}}">
                                        @error('maps_key')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Happy Clients</label>
                                        <input type="text"
                                               class="form-control @error('clients') is-invalid @enderror"
                                               name="clients"
                                               value="{{$data->clients}}">
                                        @error('clients')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Completed Projects</label>
                                        <input type="text"
                                               class="form-control @error('projects') is-invalid @enderror"
                                               name="projects"
                                               value="{{$data->projects}}">
                                        @error('projects')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Projects in progress</label>
                                        <input type="text"
                                               class="form-control @error('projects_in_progress') is-invalid @enderror"
                                               name="projects_in_progress"
                                               value="{{$data->projects_in_progress}}">
                                        @error('projects_in_progress')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="float-right">
                                <button type="submit" class="btn btn-primary">
                                    <i class="ti-save"></i> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
