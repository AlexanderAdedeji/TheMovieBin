import {useState, useEffect} from 'react';
//API
import API from '../API';

const initialMovieState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: []
}

export const useHomeFetch = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState(initialMovieState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    console.log(isLoadingMore)


    const fetchMovies = async (page, searchTerm = '')=>{
        try{
            setError(false);
            setLoading(true);
            const moviesData = await API.fetchMovies( searchTerm, page);
           setMovies(prev =>({
                ...moviesData,
                results: 
                page > 1 ? [...prev.results, ...moviesData.results] : [...moviesData.results]
            }))
            setLoading(false)
        }
        catch(error){
            setError(true)
        }     
    };


    // Initial and search
    useEffect(() => {
        setMovies(initialMovieState);
        fetchMovies(1, searchTerm);
  

    }, [searchTerm]);


        //Load More
    useEffect(()=>{
        if(!isLoadingMore) return;
        const john = fetchMovies(movies.page+ 1, searchTerm);
        console.log(john)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, movies.page])

    return {movies, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}

export default useHomeFetch;