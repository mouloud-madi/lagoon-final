<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'name_ar' => 'required|min:3|max:191|unique:services,name_ar,' . $this->service,
            'name_en' => 'required|min:3|max:191|unique:services,name_en,' . $this->service,
            'description_ar' => 'required|min:10',
            'description_en' => 'required|min:10',
            'icon' => 'required',
        ];
    }
}
