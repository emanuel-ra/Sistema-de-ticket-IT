<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SupportType;

class SupportTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SupportType::create(["name"=>"Impresoras"]);
        SupportType::create(["name"=>"WIFI"]);
        SupportType::create(["name"=>"Pagina Web"]);
        SupportType::create(["name"=>"Software"]);
        SupportType::create(["name"=>"Equipos de computo"]);
        SupportType::create(["name"=>"Otros"]);
    }
}
