<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Video;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\StoreResourceTrait;
use App\Helpers\Content\MovieHelper; 
use App\Helpers\Content\ContentManager; 
use App\Models\Movie;
use App\Helpers\Content\MovieBuilder; 
use Auth;

class MovieController extends Controller
{
    use StoreResourceTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::orderByDesc('movies.id')
            ->where('public', '=', '1')
            ->join('images', 'images.id', '=', 'movies.thumbnail')
            ->select(
                'movies.id as id',
                'movies.title as title',
                'movies.description as description',
                'movies.year as year',
                'movies.length as length',
                'movies.cast as cast',
                'movies.genre as genre',
                'images.name as image_name',
                'images.storage as image_storage',
            )
            ->simplePaginate(9);

        $subscribed = UserHandler::checkSubscription();

        return view(env('THEME') . '.movie.index', [
            'content' => $movies, 
            'subscribed' => $subscribed,
        ]);
    }

    /**
     * Display a listing of the resource in the dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexDashboard()
    {
        $movies = Movie::orderByDesc('id')->simplePaginate(10);

        return view('movie.indexDashboard', [
            'movies' => $movies, 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('movie.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $builder = new MovieBuilder();

        $builder->setRequest($request)->validate()->store();
        return redirect()->route('movieDashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $movie = Movie::where([['movies.public', '=', '1'], ['movies.id', '=', $id]])
            ->join('videos', 'videos.id', '=', 'movies.video')
            ->select(
                'movies.id as id',
                'movies.title as title',
                'movies.description as description',
                'movies.year as year',
                'movies.length as length',
                'movies.cast as cast',
                'movies.genre as genre',
                'movies.rating as rating',
                'videos.name as video_name',
                'videos.storage as video_storage',
            )
            ->first();

        if($movie == null)
            return abort(404);

        $cast = explode(", ", $movie['cast']);
        $genre = explode(", ", $movie['genre']);

        return view(env('THEME') . '.movie.show', [
            'item' => $movie,
            'cast' => $cast, 
            'genre' => $genre
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $movie = Movie::where('id', '=', $id)
            ->select('title', 'description', 'year', 'length', 'cast', 'genre', 'rating', 'public', 'video', 'trailer', 'thumbnail')
            ->first();

        if($movie != null)
            $content = $movie;
        else
            abort(404);    

        $video = Video::where('id', '=', $movie['video'])->first(['name', 'storage']);
        $trailer = Video::where('id', '=', $movie['trailer'])->first(['name', 'storage']);

        return view('movie.edit', [
            'content' => $content,
            'video' => $video,
            'trailer' => $trailer,
            'id' => $id,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $builder = new MovieBuilder();

        $builder->setRequest($request)->validate()->update($id);

        return redirect()->route('movieDashboard');
    }
}
