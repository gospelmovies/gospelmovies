<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'video_id'
    ];


    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class, 'video_id');
    }
}
