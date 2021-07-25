import React from 'react';
import { useParams } from 'react-router';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//component
import Grid from './Grid/Grid';
import Spinner from './Loading/Loading';

//Hook

//Image

import UseMovieFetch from '../hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';


const Movie = () =>{

    const {movieId } = useParams()
   
    const { movieDetails, loading, error} = UseMovieFetch(movieId)



    if(loading) return <Spinner/>
    if(error) return <div>An Error Occured</div>

    console.log(movieDetails, loading, error, movieId)

    return (
        <>
            <BreadCrumb movieTitle={movieDetails.original_title}/>
            <MovieInfo movie={movieDetails}/>
            <MovieInfoBar movie={movieDetails}/>
       
         
         </>
       
    )
}

export default Movie;
