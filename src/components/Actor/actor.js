import React from "react";
import { Image, Wrapper } from "./actor.styles";




const Actor =({name, image_url, character})=>{
  

    return (
        <>
            <Wrapper>
                <Image src={image_url} alt='actor_thumbnails'/>
                <h3>{name}</h3>
                <p>{character}</p>
            </Wrapper>
        </>
    )
}


export default Actor