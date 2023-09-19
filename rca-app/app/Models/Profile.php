<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\User;
use App\Models\Offer;

class Profile extends Model
{
    use HasFactory;
       protected $fillable = [
        'user_id',
        'firstName',
        'lastName',
        'email',
    ];

    public function user():BelongsTo 
    {
         return $this->belongsTo(User::class);
    }

     public function offer(): HasMany
    {
        return $this->hasMany(Offer::class);
    }
}
