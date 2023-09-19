<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\OfferStoreRequest;
use App\Models\Profile;
use App\Models\Offer;
use App\Models\User;

class OfferController extends Controller
{
    public function storeOffer(OfferStoreRequest $request){
        if($request->insuranceType =="" ){
            return "You must select an inssurance";
        }

          // Check if validation fails
        
       
      // Check if profile exists
         $currentProfile = Profile::where("email", $request->email)->first();


        if($currentProfile){
             return "UserProfile exist";
        }
           
        
        if(!$currentProfile){
                $currentProfile = Profile::create([
                        'user_id'=> Auth::id(),
                        'firstName' => $request->firstName,
                        'lastName' => $request->lastName,
                        'email' => $request->email,
                ]);
        } 

        $offer= Offer::create([
            'profile_id'=>  $currentProfile->id,
            'insuranceType' => $request->insuranceType,
            'date' => $request->date,
            'carType' => $request->carType,
            'chassis' => $request->chassis,
            'manufacture' => $request->manufacture,
            'registration' => $request->registration,
            'kilometers' => $request->kilometers,
        ]);
      // Create a success message
        $message = "Offer {$offer->insuranceType} create succesfully";

        return [
            'offer'=>$offer,
            'message'=>$message
        ];
    }
    public function getProfile(){
        // Retrieve the currently authenticated user
        $currentUser = Auth::user();

        // Find the user's profile based on their ID
        $userWithProfile = User::with('profile')->where('id', $currentUser->id)->first();
        return $userWithProfile;
    }
     public function getProfileOffer($profileId){
        // Find the user's profile based on their ID
        return Profile::with('offer')->where('id', $profileId)->first();
    }
}
