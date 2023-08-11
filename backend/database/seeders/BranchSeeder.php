<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Branch;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::create(["code"=>"0","name"=>"Ramon corona"]);
        Branch::create(["code"=>"10","name"=>"Rincón de la Salud"]);
        Branch::create(["code"=>"20","name"=>"Cabañas"]);
        Branch::create(["code"=>"40","name"=>"Chapultepec"]);
    }
}
