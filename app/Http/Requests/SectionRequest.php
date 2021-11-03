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
            'section_one_description_ar' => 'nullable',
            'section_one_description_en' => 'nullable',
            'section_one_image1' => 'nullable|image',
            'section_one_image2' => 'nullable|image',
            'section_two_gif_ar' => 'nullable|image',
            'section_two_gif_en' => 'nullable|image',
            'section_two_description_ar' => 'nullable',
            'section_two_description_en' => 'nullable',
            'section_two_image' => 'nullable|image',
            'section_three_title_ar' => 'nullable',
            'section_three_title_en' => 'nullable',
            'section_three_description_ar' => 'nullable',
            'section_three_description_en' => 'nullable',
            'section_three_image' => 'nullable|image',
            'section_four_title_ar' => 'nullable',
            'section_four_title_en' => 'nullable',
            'section_four_description_ar' => 'nullable',
            'section_four_description_en' => 'nullable',
            'section_four_vedio' => 'nullable',
        ];
    }
}
