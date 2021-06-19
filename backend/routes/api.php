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
    Route::get('adherent', 'AdherentController@index')->middleware('auth:api');
    Route::put('updateadherent/{id}', 'AdherentController@updateadherent')->middleware('auth:api');
    Route::delete('delete/{id}', 'AdherentController@destroy')->middleware('auth:api');
    Route::post('addadherent', 'AdherentController@store')->middleware('auth:api');
    Route::get('Activite','ActiviteController@getActivite');
    Route::get('Activite/{id}','ActiviteController@getActivitebyid');
});
