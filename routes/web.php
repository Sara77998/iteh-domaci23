<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('rezisers','ReziserController@index');
Route::get('rezisers/{id}','ReziserController@show');
Route::post('rezisers/sacuvaj','ReziserController@store');

Route::get('films','FilmController@index');
Route::post('films/sacuvaj','FilmController@store');
Route::delete('films/izbrisi/{id}','FilmController@destroy');