import { useState, useEffect } from "react";

import API from '../API';



export const UseMovieFetch = (movieId) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, SetLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {

            try {
                SetLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setMovieDetails({
                    ...movie,
                    actors:credits.cast,
                    directors:directors
                })
                SetLoading(false)
            }
            catch (error) {
                setError(true);
            }
        }

        fetchData();

    }, [movieId])


    return {movieDetails, loading, error}
}


export default UseMovieFetch;