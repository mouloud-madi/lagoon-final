<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('section_one_gif_ar')->nullable();
            $table->string('section_one_gif_en')->nullable();
            $table->text('section_one_description_ar')->nullable();
            $table->text('section_one_description_en')->nullable();
            $table->string('section_one_image1')->nullable();
            $table->string('section_one_image2')->nullable();
            $table->string('section_two_gif_ar')->nullable();
            $table->string('section_two_gif_en')->nullable();
            $table->text('section_two_description_ar')->nullable();
            $table->text('section_two_description_en')->nullable();
            $table->string('section_two_image')->nullable();
            $table->string('section_three_title_ar')->nullable();
            $table->string('section_three_title_en')->nullable();
            $table->text('section_three_description_ar')->nullable();
            $table->text('section_three_description_en')->nullable();
            $table->string('section_three_image')->nullable();
            $table->string('section_four_title_ar')->nullable();
            $table->string('section_four_title_en')->nullable();
            $table->text('section_four_description_ar')->nullable();
            $table->text('section_four_description_en')->nullable();
            $table->string('section_four_vedio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sections');
    }
}
