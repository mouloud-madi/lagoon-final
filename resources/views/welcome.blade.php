<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Lagoon Design</title>
    <meta content="Lagoon Design" name="description">
    <meta content="Lagoon Design" name="keywords">
    <link href="{{asset('images/logo.png')}}" rel="icon">
    <link href="{{asset('images/logo.png')}}" rel="apple-touch-icon">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&family=Tajawal:wght@500&display=swap" rel="stylesheet">
    <link href="{{asset('site/assets/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('site/assets/vendor/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('site/assets/css/style.css')}}" rel="stylesheet">
    <link href="{{asset('site/add-style.css')}}" rel="stylesheet">
    <script type="text/javascript">
        window.Laravel = {
            siteInfo: {!! \App\Models\SiteInformation::find(1) !!},
            section: {!! \App\Models\Section::find(1) !!}
        }
    </script>
    <style>
        .section-title h2 {
            color: #B3965A !important;
        }
        .section-title h2::after {
            content: "" !important;
            background: none;
        }
    </style>
</head>
<body>
<div id="app"></div>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
<script src="{{asset('dist/js/app.js')}}?<?php echo time();?>"></script>
<script src="{{asset('site/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('site/assets/js/main.js')}}"></script>
</body>
</html>

