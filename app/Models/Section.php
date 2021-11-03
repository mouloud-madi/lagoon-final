<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_one_gif_ar',
        'section_one_gif_en',
        'section_one_description_ar',
        'section_one_description_en',
        'section_one_image1',
        'section_one_image2',
        'section_two_gif_ar',
        'section_two_gif_en',
        'section_two_description_ar',
        'section_two_description_en',
        'section_two_image',
        'section_three_title_ar',
        'section_three_title_en',
        'section_three_description_ar',
        'section_three_description_en',
        'section_three_image',
        'section_four_title_ar',
        'section_four_title_en',
        'section_four_description_ar',
        'section_four_description_en',
        'section_four_vedio',
    ];

    public function setSectionOneGifArAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_one_gif_ar'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionOneGifEnAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_one_gif_en'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionOneImage1Attribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_one_image1'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionOneImage2Attribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_one_image2'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionTowGifArAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_tow_gif_ar'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionTowGifEnAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_tow_gif_en'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionTowImageAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_tow_image'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionThreeImageAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_three_image'] = env('APP_URL') . $path . $imageName;
        }
    }

    public function setSectionFoorVedioAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sections/';
            $value->move(public_path('uploads/sections'), $imageName);
            $this->attributes['section_four_vedio'] = env('APP_URL') . $path . $imageName;
        }
    }
}
