import React from 'react';
import { useParams } from 'react-router';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//component
import Grid from './Grid/Grid';
import Spinner from './Loading/Loading';

//Hook

//Image
import Noimage from '../images/no_image.jpg';

import UseMovieFetch from '../hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/actor';


const Movie = () =>{

    const {movieId } = useParams()
   
    const { movieDetails, loading, error} = UseMovieFetch(movieId)



    if(loading) return <Spinner/>
    if(error) return <div>An Error Occured</div>


    return (
        <>
            <BreadCrumb movieTitle={movieDetails.original_title}/>
            <MovieInfo movie={movieDetails}/>
            <MovieInfoBar movie={movieDetails}/>

            <Grid header ='Actors'>
            {movieDetails.actors.map(actor=>{
                return(
                <Actor
                    
                key={actor.credit_id}
                image_url={
                    actor.profile_path?  `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : Noimage}
                name ={actor.name}
                character={actor.character}
              
                />
               
                )
            })}
        </Grid>
   
       
         
         </>
       
    )
}

export default Movie;
