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
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
        ]);
        \App\Models\SiteInformation::create([
            'id' => 1,
            'latitude' => '',
            'Longitude' => '',
            'contact_email1' => '',
            'contact_email2' => '',
            'received_email' => '',
            'address_ar' => '',
            'address_en' => '',
            'facebook' => '',
            'instagram' => '',
            'linkedin' => '',
            'youtube' => '',
            'phone1' => '',
            'phone2' => '',
            'maps_key' => '',
            'clients' => '',
            'projects' => '',
            'projects_in_progress' => '',
        ]);
    }
}
