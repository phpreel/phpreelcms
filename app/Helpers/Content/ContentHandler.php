<?php
namespace App\Helpers\Content; 

use App\Models\Movie;
use App\Models\Series;

class ContentHandler
{
    /**
     * Return the latest public movies without pagination
     *
     * @param int $limit how many of the latest movies to get
     */
    public static function getLatestMovies(int $limit)
    {
        //Error handling
        if($limit < 0)
            throw new Exception("\$limit must be a non-negative integer");

        $movies = Movie::where('public', '=', '1')
            ->join('images', 'images.id', '=', 'movies.thumbnail')
            ->orderByDesc('movies.id')
            ->select([
                'movies.id as movie_id',
                'images.name as image_name',
                'images.storage as image_storage',
            ])
            ->limit($limit)
            ->get();

        return $movies;
    }

    /**
     * Return the latest public movies without pagination
     *
     * @param int $limit how many of the latest series to get
     */
    public static function getLatestSeries(int $limit)
    {
        //Error handling
        if($limit < 0)
            throw new Exception("\$limit must be a non-negative integer");

        $series = Series::where('public', '=', '1')
            ->join('images', 'images.id', '=', 'series.thumbnail')
            ->orderByDesc('series.id')
            ->select([
                'series.id as series_id',
                'images.name as image_name',
                'images.storage as image_storage',
            ])
            ->limit($limit)
            ->get();

        return $series;
    }

    /**
     * Return the latest public movies with simple pagination
     *
     * @param int $limit how many of the latest movies to get
     */
    public static function getLatestMoviesSimplePaginate(int $limit)
    {
        //Error handling
        if($limit < 0)
            throw new Exception("\$limit must be a non-negative integer");

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
            ->simplePaginate($limit);

        return $movies;
    }

    /**
     * Return the latest public movies with simple pagination
     *
     * @param int $limit how many of the latest series to get
     */
    public static function getLatestSeriesSimplePaginate(int $limit)
    {
        //Error handling
        if($limit < 0)
            throw new Exception("\$limit must be a non-negative integer");

            $series = Series::orderByDesc('series.id')
                ->where('public', '=', '1')
                ->join('images', 'images.id', '=', 'series.thumbnail')
                ->select([
                    'series.id as series_id',
                    'series.title as series_title',
                    'series.description as series_description',
                    'images.name as image_name',
                    'images.storage as image_storage'
                ])
                ->simplePaginate($limit);

        return $series;
    }

    /**
     * Return the public movie with specified id
     *
     * @param int $id movie to be returned
     */
    public static function getMovie(int $id)
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

        return $movie;
    }

    /**
     * Return all the data linked to a series (season, episode)
     *
     * @param int $id series 
     */
    public static function getSeries(int $id)
    {
        //Get the id of all the seasons from a specific series
        $seasons = ContentHandler::getSeasonsFromSeries($id);

        //All the episodes and seasons as separate array elements
        $series = [];

        for($i=0;$i<count($seasons);$i++)
        {
            $episode = ContentHandler::getEpisodesFromSeason($seasons[$i]->season_id);
            
            $series[$i] = [
                'episode' => $episode,
                'season' => $seasons[$i]
            ];
        }

        return $series;
    }

    /**
     * Return the trailer for the movie with the specified id
     *
     * @param int $id movie to be returned
     */
    public static function getMovieTrailer(int $id)
    {
        $movie = Movie::where([['movies.public', '=', '1'], ['movies.id', '=', $id]])
            ->join('videos', 'videos.id', '=', 'movies.trailer')
            ->select(
                'movies.id as id',
                'movies.title as title',
                'videos.name as video_name',
                'videos.storage as video_storage',
            )
            ->first();

        return $movie;
    }

    /**
     * Return all the public seasons of a particular series
     *
     * @param int $id series that contains the seasons
     */
    public static function getSeasonsFromSeries(int $id)
    {
        $seasons = Series::where([['series.id', '=', $id], ['series.public', '=', 1]])
            ->join('seasons', 'seasons.series_id', '=', 'series.id')->orderBy('seasons.order', 'asc')
            ->join('images', 'images.id', '=', 'seasons.thumbnail')
            ->get([
                'seasons.id as season_id', 
                'seasons.title', 
                'series.description as series_description',
                'series.title as series_title', 
                'series.id as series_id', 
                'images.name as image_name',
                'images.storage as image_storage'
            ]); 

        return $seasons;
    }

    /**
     * Return all the public seasons of a particular series
     *
     * @param int $id season that contains the episodes
     */
    public static function getEpisodesFromSeason(int $id)
    {
        $episode = Episode::where([['episodes.season_id', '=', $id], ['episodes.public', '=', 1]])
            ->orderBy('order', 'asc')
            ->get();

        return $episode;
    }

    /**
     * Return the public movies that match the query strings (title, description)
     *
     * @param array $query list of strings to search for
     */
    public static function findMovies(array $query)
    {
        //Search the database for each keyword one by one
        $movies = Movie::orderByDesc('id')
            ->where('public', '=', '1');

        for($i=0;$i<count($query);$i++)
            $movies = $movies
                ->orWhere('title', 'like', '%' . $query[$i] . '%')
                ->orWhere('description', 'like', '%' . $query[$i] . '%');


        $movies = $movies
            ->join('images', 'images.id', '=', 'movies.thumbnail')
            ->select(
                'movies.id as id',
                'movies.title as title',
                'movies.description as description',
                'movies.length as length',
                'images.name as image_name',
                'images.storage as image_storage',
            )
            ->get();

        return $movies;
    }

    /**
     * Return the public series that match the query strings (title, description)
     *
     * @param array $query list of strings to search for
     */
    public static function findSeries(array $query)
    {
        //Search the database for each keyword one by one
        $series = Series::orderByDesc('id')
            ->where('public', '=', '1');

        for($i=0;$i<count($query);$i++)
            $series = $series
                ->orWhere('title', 'like', '%' . $query[$i] . '%')
                ->orWhere('description', 'like', '%' . $query[$i] . '%');

        $series = $series  
            ->join('images', 'images.id', '=', 'series.thumbnail')
            ->select(
                'series.id as id',
                'series.title as title',
                'series.description as description',
                'images.name as image_name',
                'images.storage as image_storage',
            )
            ->get();

        return $series;
    }

    /**
     * Return the values stored in the free and auth fields
     *
     * @param int $id movie id
     */
    public static function getAccessAvailabilityMovie(int $id): array
    {
        $movie = Movie::where('id', '=', $id)
            ->first(['premium', 'auth']);

        return $movie->toArray();
    }
}