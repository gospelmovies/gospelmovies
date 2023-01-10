<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        return response([
            'profile' => auth()->guard('admin')->user()->name,
        ]);
    }
}
