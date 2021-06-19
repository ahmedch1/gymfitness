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
    //planning
    Route::get('planning', 'PlanningController@index')->middleware('auth:api');
    Route::put('updateplanning/{id}', 'PlanningController@updateplanning')->middleware('auth:api');
    Route::delete('deleteplanning/{id}', 'PlanningController@destroy')->middleware('auth:api');
    Route::post('addplanning', 'PlanningController@store')->middleware('auth:api');
    //caisse
    Route::get('caisse', 'CaisseController@index')->middleware('auth:api');
    Route::put('updatecaisse/{id}', 'CaisseController@updatecaisse')->middleware('auth:api');
    Route::delete('deletecaisse/{id}', 'CaisseController@destroy')->middleware('auth:api');
    Route::post('addcaisse', 'CaisseController@store')->middleware('auth:api');
    //abonnement
    Route::get('abonnement', 'AbonnementController@index')->middleware('auth:api');
    Route::put('updateabonnement/{id}', 'AbonnementController@updatecaisse')->middleware('auth:api');
    Route::delete('deleteabonnement/{id}', 'AbonnementController@destroy')->middleware('auth:api');
    Route::post('addabonnement', 'AbonnementController@store')->middleware('auth:api');

});
