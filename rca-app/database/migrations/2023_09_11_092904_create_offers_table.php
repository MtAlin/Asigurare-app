<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Profile;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Profile::class)->nullable();
            $table->string('insuranceType')->nullable();
            $table->string('date');
            $table->string('carType')->nullable();
            $table->string('chassis')->nullable();
            $table->integer('manufacture')->nullable();
            $table->string('registration')->nullable();
            $table->integer('kilometers')->nullable();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};
