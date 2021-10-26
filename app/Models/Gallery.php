<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'image_url',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class)->withDefault();
    }

    public function setImageUrlAttribute($value)
    {
        if ($value) {
            $imageName = time() . '.' . $value->getClientOriginalExtension();
            $path = '/uploads/images/';
            $value->move(public_path('uploads/images'), $imageName);
            $this->attributes['image_url'] = env('APP_URL') . $path . $imageName;
        }
    }
}
