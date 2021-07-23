import React, { useState, useEffect } from 'react';
//API
import API from '../API';

//Hooks
import useHomeFetch from '../hooks/useHomeFetch';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components
import HeroImage from './HeroImage';
import Grid from './Grid/Grid';


//image
import Noimage from '../images/no_image.jpg';
import Thumbnails from './Thumbnails/Thumbnail';
import Loading from './Loading/Loading';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';



const Home = () => {
    const { movies, loading, error, searchTerm,setSearchTerm, setIsLoadingMore } = useHomeFetch()
    console.log(movies)
    console.log(loading)
    return (
        <>


            {movies.results[0] ?
                (<HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                    title={movies.results[0].original_title}
                    text={movies.results[0].overview}
                />)
                :
                null
            }
                <SearchBar setSearchTerm={setSearchTerm}/>

            <Grid header ={ searchTerm ? searchTerm : 'Popular Movies'}>
                {movies.results.map(movie =>{
                    return (
                        <div key={movie.id}>
                            {/* //{movie.title} */}
                            <Thumbnails 
                            key={movie.id}
                                clickable
                                image= {
                                    movie.poster_path?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    :
                                    Noimage
                                }
                                movieId = {movie.id}
                            />
                           {/* <Button text='Download'/> */}
                        </div>
                    )
                })}
            
            </Grid>

           {loading && <Loading/>}

            {movies.page < movies.total_pages && !loading &&(
                 <Button text='Load More' callback= {()=>setIsLoadingMore(true)}/>
            )}
        </>
    )
}



export default Home

