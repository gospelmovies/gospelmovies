<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\VideoResource;
use App\Models\Category;
use App\Models\Video;
use Illuminate\Http\Request;

class PostController extends Controller
{


    public function index()
    {
        $videos = Video::latest()->get();

        return response([
            'message' => 'success',
            'videos' =>  VideoResource::collection($videos)
        ], 200);
    }


    public function store(PostRequest $postRequest)
    {
        $postRequest->validated();

        $file = $postRequest->file('file');
        $thumbnail = $postRequest->file('thum$thumbnail');
        $thriller = $postRequest->file('thriller');

        $filename = uniqid() . $file->getClientOriginalName();
        $thumbname = uniqid() . $thumbnail->getClientOriginalName();
        $thrillername = uniqid() . $thriller->getClientOriginalName();
        $file->move(public_path('public/videos'), $filename);
        $thumbnail->move(public_path('public/thumbnails'), $thumbname);
        $thriller->move(public_path('public/thrillers'), $thrillername);

        $res = auth()->guard('admin')->user()->videos()->create([
            'title' => $postRequest->title,
            'time' => $postRequest->time,
            'description' => $postRequest->description,
            'year' => $postRequest->year,
            'producer' => $postRequest->producer,
            'cast' => $postRequest->cast,
            'rating' => $postRequest->rating,
            'file' => $filename,
            'thumbnail' => $thumbname,
            'thriller' => $thrillername,
        ]);

        if ($res) {
            foreach ($postRequest->categories as $cat) {
                $final = Category::create([
                    'video_id' => $res->id,
                    'category_name' => $cat
                ]);
            }
        } else {
            return response([
                'message' => 'Error uploading video',
            ], 400);
        }


        if ($final) {
            return response([
                'message' => 'success',
            ], 201);
        } else {
            return response([
                'message' => 'Error uploading video',
            ], 400);
        }
    }
}