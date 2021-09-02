<?php

use Illuminate\Database\Seeder;

class ReziserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rezisers')->insert([
            'ime'=>'George',
            'prezime'=>'Lucas',
            'godina_rodjenja'=>1944,
            'zemlja_porekla'=>'USA'

        ]);
    }
}
