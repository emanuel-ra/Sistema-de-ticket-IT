<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::create(["name"=>"Compras"]);
        Department::create(["name"=>"Tienda"]);
        Department::create(["name"=>"Call Center"]);
        Department::create(["name"=>"Seguridad"]);
        Department::create(["name"=>"Monitores"]);
        Department::create(["name"=>"Almacén"]);
        Department::create(["name"=>"Mesa de control"]);
        Department::create(["name"=>"Recursos Humanos"]);
        Department::create(["name"=>"Gerencia"]);
        Department::create(["name"=>"Contabilidad"]);
        Department::create(["name"=>"Tesorería"]);
        Department::create(["name"=>"Diseño"]);
    }
}
