<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminAuthentication extends Controller
{
    public function login(AdminLoginRequest $request)
    {
        $request->validated();

        $admin = Admin::whereEmail($request->email)->first();
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response([
                'message' => 'Invalid credentials'
            ], 422);
        }

        $token = $admin->createToken('adminToken')->plainTextToken;

        return response([
            'message' => 'success',
            'admin' => new AdminResource($admin),
            'token' => $token
        ], 200);
    }
}
