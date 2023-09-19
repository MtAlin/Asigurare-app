<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Profile;


class Offer extends Model
{
    use HasFactory;
      protected $fillable = [
      'profile_id',
      'insuranceType',
      'date',
      'carType',
      'chassis',
      'manufacture',
      'registration',
      'kilometers',
    ];

     public function profile():BelongsTo 
    {
         return $this->belongsTo(Profile::class);
    }
}
