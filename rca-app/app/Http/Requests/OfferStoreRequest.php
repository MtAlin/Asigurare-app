<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
class OfferStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
public function rules(): array
{
    return [
        'firstName' => 'required',
        'lastName' => 'required|string|max:50',
        'email' => 'required|email',
        'insuranceType' => 'required|string',
        'date' => 'required', // Validate date format
        'carType' => ['nullable', 'string'],
        'chassis' => ['nullable', 'string'],
        'manufacture' => ['nullable', 'integer'],
        'registration' => ['nullable', 'string'],
        'kilometers' => ['nullable', 'integer'],
    ];
}

}
