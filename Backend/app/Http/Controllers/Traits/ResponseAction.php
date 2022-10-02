<?php

namespace App\Http\Controllers\Traits;

trait ResponseAction
{
    public function response($code, $status, $message = '', $error = '', $data = [])
    {
        return [
            'code' => $code,
            'status' => $status,
            'message' => $message,
            'error' => $error,
            'data' => $data,
        ];
    }
}