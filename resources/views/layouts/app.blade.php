<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('assets/vendors/feather/feather.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendors/ti-icons/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendors/css/vendor.bundle.base.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/vertical-layout-light/style.css')}}">
    <link rel="shortcut icon" href="{{asset('images/logo.png')}}"/>
    <style>
        a:hover {
            text-decoration: none;
            color: #be8130;
        }

        a {
            color: #BC9A6C;
        }
        .btn{
            border-radius: 5px !important;
        }
        .card{
            border-radius: 5px!important;
        }
        .btn-sm{
            margin-left: 3px !important;
        }
    </style>
</head>
<body>
<div class="container-scroller">
    @include('layouts.navbar')
    <div class="container-fluid page-body-wrapper">
        @include('layouts.sidebar')
        <div class="main-panel">
            @yield('content')
            @include('layouts.footer')
        </div>
    </div>
</div>
<script src="{{asset('assets/vendors/js/vendor.bundle.base.js')}}"></script>
<script src="{{asset('assets/js/off-canvas.js')}}"></script>
<script src="{{asset('assets/js/hoverable-collapse.js')}}"></script>
<script src="{{asset('assets/js/template.js')}}"></script>
<script src="{{asset('assets/js/settings.js')}}"></script>
<script src="{{asset('assets/js/todolist.js')}}"></script>
</body>
</html>

