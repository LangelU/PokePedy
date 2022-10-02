<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pokemon_locations', function (Blueprint $table) {
            $table->id();
            $table->integer('probability')->nullable();
            $table->unsignedBigInteger('pokemon_id');
            $table->foreign('pokemon_id')->references('id')->on('pokemon');
            $table->unsignedBigInteger('region_id');
            $table->foreign('region_id')->references('id')->on('regions');
            $table->unsignedBigInteger('game_version_id');
            $table->foreign('game_version_id')->references('id')->on('game_versions');
            $table->unsignedBigInteger('route_id');
            $table->foreign('route_id')->references('id')->on('region_routes');
            $table->unsignedBigInteger('catch_method_id');
            $table->foreign('catch_method_id')->references('id')->on('catch_methods');
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
        Schema::dropIfExists('pokemon_locations');
    }
}
