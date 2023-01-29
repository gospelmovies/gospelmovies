<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'time',
        'description',
        'year',
        'producer',
        'cast',
        'rating',
        'file',
        'thumbnail',
        'thriller',
        'admin_id',
    ];


    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }
}
