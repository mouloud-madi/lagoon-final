<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteInformation;

class InfoController extends Controller
{
    public function index()
    {
        return response()->json(SiteInformation::find(1));
    }
}
