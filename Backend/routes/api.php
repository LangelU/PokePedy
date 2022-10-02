<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::GET('/test2', 'App\Http\Controllers\CatchMethodController@index');

//** Catch Method Routes **/
Route::GET('/metodos-de-captura', 'App\Http\Controllers\CatchMethodController@index')->name('catchMethods.index');
Route::POST('/crear-metodo-de-captura', 'App\Http\Controllers\CatchMethodController@store')->name('catchMethods.store');
Route::GET('/metodo-de-captura/{id}', 'App\Http\Controllers\CatchMethodController@show')->name('catchMethods.getCatchMethod');
Route::PUT('/actualizar-metodo-de-captura/{id}', 'App\Http\Controllers\CatchMethodController@update')->name('catchMethods.update');
Route::POST('/eliminar-metodo-de-captura/{id}', 'App\Http\Controllers\CatchMethodController@destroy')->name('catchMethods.delete');
