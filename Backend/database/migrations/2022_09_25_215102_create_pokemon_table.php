<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pokemon', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->unsignedBigInteger('first_type_id');
            $table->foreign('first_type_id')->references('id')->on('types');
            $table->unsignedBigInteger('second_type_id')->nullable();
            $table->foreign('second_type_id')->references('id')->on('types');
            $table->string('category', 255);
            $table->decimal('heigth', 11, 2);
            $table->decimal('weigth', 11, 2);
            $table->string('pokedex_entry', 5000);
            $table->integer('catch_rate');
            $table->integer('friendship_base');
            $table->string('egg_group', 255);
            $table->integer('male_gender')->nullable();
            $table->integer('female_gender')->nullable();
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
        Schema::dropIfExists('pokemon');
    }
}
