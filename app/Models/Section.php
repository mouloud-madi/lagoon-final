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
}
