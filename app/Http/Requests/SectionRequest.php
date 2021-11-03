<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SectionRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'section_one_gif_ar' => 'nullable|image',
            'section_one_gif_en' => 'nullable|image',
            'section_one_description_ar' => 'required',
            'section_one_description_en' => 'required',
            'section_one_image1' => 'nullable|image',
            'section_one_image2' => 'nullable|image',
            'section_two_gif_ar' => 'nullable|image',
            'section_two_gif_en' => 'nullable|image',
            'section_two_description_ar' => 'required',
            'section_two_description_en' => 'required',
            'section_two_image' => 'nullable|image',
            'section_three_title_ar' => 'required',
            'section_three_title_en' => 'required',
            'section_three_description_ar' => 'required',
            'section_three_description_en' => 'required',
            'section_three_image' => 'nullable|image',
            'section_four_title_ar' => 'required',
            'section_four_title_en' => 'required',
            'section_four_description_ar' => 'required',
            'section_four_description_en' => 'required',
            'section_four_vedio' => 'nullable',
        ];
    }
}
