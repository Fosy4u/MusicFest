import React from 'react';
import './PlaylistCard.css';
import SpotifyWebApi from "spotify-web-api-js";


export default function PlaylistCard({name, description,image__url,click__func}) {

    

    return (
        <div className='card' onClick={click__func}>
            <img  width = '200'src={image__url} alt='plalist image'/>
            
            <h3>
               {name}
            </h3>
            <p>{description}</p>
        </div>
    )
}
