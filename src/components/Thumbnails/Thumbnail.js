import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumbnail.styles'



const Thumbnails = ({ image, movieId, clickable }) => {




    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='movie-thumbnail' />
                </Link>)
                :

                (<Image src={image} alt='movie-thumbnail' />)
            }

        </div>
    )
}


export default Thumbnails