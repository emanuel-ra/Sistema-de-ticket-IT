<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('requester_name');
            $table->string('requester_email');
            $table->string('device');          
            $table->longText('request_description');
            $table->longText('observations')->nullable();
            
            $table->unsignedBigInteger('status_id');
            $table->unsignedBigInteger('branch_id');
            $table->unsignedBigInteger('type_id');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('admin_id')->default(0);


            $table->foreign('status_id')->references('id')->on('statuses');
            $table->foreign('branch_id')->references('id')->on('branches');
            $table->foreign('type_id')->references('id')->on('support_types');
            $table->foreign('department_id')->references('id')->on('departments');

            $table->index(['requester_email']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};
