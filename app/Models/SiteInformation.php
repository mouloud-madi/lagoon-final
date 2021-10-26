<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'latitude',
        'longitude',
        'contact_email1',
        'contact_email2',
        'received_email',
        'address_ar',
        'address_en',
        'facebook',
        'instagram',
        'linkedin',
        'youtube',
        'phone1',
        'phone2',
        'maps_key',
        'clients',
        'projects',
        'projects_in_progress',
    ];

//    public function getLatitudeAttribute($value)
//    {
//        return floatval($value);
//    }
//
//    public function getLongitudeAttribute($value)
//    {
//        return floatval($value);
//    }
}
