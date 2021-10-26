<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url'
    ];

    public function setImageUrlAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/sliders/';
            $value->move(public_path('uploads/sliders'), $imageName);
            $this->attributes['image_url'] = env('APP_URL') . $path . $imageName;
        }
    }
}
