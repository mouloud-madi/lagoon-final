<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LagoonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'latitude' => 'nullable',
            'longitude' => 'nullable',
            'contact_email1' => 'nullable|email',
            'contact_email2' => 'nullable|email',
            'received_email' => 'required|email',
            'address_ar' => 'required',
            'address_en' => 'required',
            'facebook' => 'nullable|url',
            'instagram' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'youtube' => 'nullable|url',
            'phone1' => 'nullable',
            'phone2' => 'nullable',
            'maps_key' => 'nullable',
            'clients' => 'nullable',
            'projects' => 'nullable',
            'projects_in_progress' => 'nullable',
        ];
    }
}
