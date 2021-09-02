<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\reziser;
use App\film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReziserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result=reziser::all();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reziser=new reziser();
        $reziser->ime=$request->ime;
        $reziser->prezime=$request->prezime;
        $reziser->godina_rodjenja=$request->godina_rodjenja;
        $reziser->zemlja_porekla=$request->zemlja_porekla;
        $reziser->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result=DB::table('rezisers')
        ->join('films', function ($join) use($id){
            $join->on('rezisers.id', '=', 'films.reziser_id')
                 ->where('rezisers.id', '=', $id);
        })
        ->get();

        return $result;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
