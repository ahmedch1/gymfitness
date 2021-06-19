<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
    //adherent
    Route::get('adherent', 'AdherentController@index')->middleware('auth:api');
    Route::put('updateadherent/{id}', 'AdherentController@updateadherent')->middleware('auth:api');
    Route::delete('delete/{id}', 'AdherentController@destroy')->middleware('auth:api');
    Route::post('addadherent', 'AdherentController@store')->middleware('auth:api');
    //entraineur
    Route::get('entraineur', 'EntraineurController@index')->middleware('auth:api');
    Route::put('updateentraineur/{id}', 'EntraineurController@updateentraineur')->middleware('auth:api');
    Route::delete('deleteentraineur/{id}', 'EntraineurController@destroy')->middleware('auth:api');
    Route::post('addentraineur', 'EntraineurController@store')->middleware('auth:api');
});
