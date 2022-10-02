<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pokemon_skills', function (Blueprint $table) {
            $table->id();
            
$table->unsignedBigInteger('pokemon_id');
$table->foreign('pokemon_id')->references('id')->on('pokemon');
$table->unsignedBigInteger('first_skill_id');
$table->foreign('first_skill_id')->references('id')->on('skills');
$table->unsignedBigInteger('second_skill_id');
$table->foreign('second_skill_id')->references('id')->on('skills');
$table->unsignedBigInteger('hidden_first_skill_id');
$table->foreign('hidden_first_skill_id')->references('id')->on('skills');
$table->unsignedBigInteger('hidden_second_skill_id');
$table->foreign('hidden_second_skill_id')->references('id')->on('skills');
$table->unsignedBigInteger('mega_skill_id');
$table->foreign('mega_skill_id')->references('id')->on('skills');
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
        Schema::dropIfExists('pokemon_skills');
    }
}
