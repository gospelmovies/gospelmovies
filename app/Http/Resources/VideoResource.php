<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'admin_id' => $this->admin_id,
            'title' => $this->title,
            'time' => $this->time,
            'description' => $this->description,
            'year' => $this->year,
            'producer' => $this->producer,
            'cast' => $this->cast,
            'rating' => $this->rating,
            'file' => $this->file,
            'thumbnail' => $this->thumbnail,
            'thriller' => $this->thriller,
            'created_at' => $this->created_at,
            'category' => CategoryResource::collection($this->categories),
        ];
    }
}
