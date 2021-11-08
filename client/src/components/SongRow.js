import React,{useState, useEffect} from 'react';
import './SongRow.css';
import { useStateValue } from '../utilities/StateProvider';

export default function SongRow({track='test', next ='test + 1'}) {
    const [{user,token}, dispatch] = useStateValue();




function handle__track__click() {
    
    if(track){
        dispatch({
            type : 'SET_TRACK',
            payload: track
        
          });
          
          dispatch({
            type : 'SET_PLAY',
            payload: true
        
          })
    }
   console.log('track is : ', track)
}

    return (
        <div className= 'songRow' onClick={handle__track__click}>
            <img className='songRow__album' src={track.image__url? track.image__url: track.album.images[0].url} alt='song image'/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(",  ")}{" - "}
                    {track.name}
                </p>
            </div>
            
        </div>
    )
}
