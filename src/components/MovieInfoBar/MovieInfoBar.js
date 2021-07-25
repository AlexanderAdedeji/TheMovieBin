import React from 'react';
import {Wrapper, Content } from './MovieInfoBar.styles'
import {calcTime, convertMoney} from '../../helpers'


const MovieInfoBar = ({movie})=>{



    return(<>
    <Wrapper>
        <Content>
            <div className='box'>

            <p>{`Running Time: ${calcTime(movie.runtime)}`}  </p>
            
            </div>
            <div className='box'>
            <p>{`Budget: ${convertMoney(movie.budget)}`} </p>       
                 </div>
            <div className='box'>
            <p>{`Revenue: ${convertMoney(movie.revenue)}`} </p>
            </div>

        </Content>
 
    </Wrapper>
       
    
    
    </>)

}



export default MovieInfoBar;