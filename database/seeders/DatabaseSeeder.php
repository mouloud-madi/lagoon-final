<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        \App\Models\User::create([
//            'name' => 'Admin',
//            'email' => 'admin@admin.com',
//            'password' => Hash::make('admin'),
//        ]);
        \App\Models\Section::create([
            'id' => 1,
            'section_one_gif_ar' => '',
            'section_one_gif_en' => '',
            'section_one_description_ar' => '',
            'section_one_description_en' => '',
            'section_one_image1' => '',
            'section_one_image2' => '',
            'section_two_gif_ar' => '',
            'section_two_gif_en' => '',
            'section_two_description_ar' => '',
            'section_two_description_en' => '',
            'section_two_image' => '',
            'section_three_title_ar' => '',
            'section_three_title_en' => '',
            'section_three_description_ar' => '',
            'section_three_description_en' => '',
            'section_three_image' => '',
            'section_four_title_ar' => '',
            'section_four_title_en' => '',
            'section_four_description_ar' => '',
            'section_four_description_en' => '',
            'section_four_vedio' => '',
        ]);
//        \App\Models\SiteInformation::create([
//            'id' => 1,
//            'latitude' => '',
//            'Longitude' => '',
//            'contact_email1' => '',
//            'contact_email2' => '',
//            'received_email' => '',
//            'address_ar' => '',
//            'address_en' => '',
//            'facebook' => '',
//            'instagram' => '',
//            'linkedin' => '',
//            'youtube' => '',
//            'phone1' => '',
//            'phone2' => '',
//            'maps_key' => '',
//            'clients' => '',
//            'projects' => '',
//            'projects_in_progress' => '',
//        ]);
    }
}
