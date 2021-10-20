import React,{useState, useEffect} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateValue } from '../utilities/StateProvider';
import './Player.css'

export default function Player() {
    const [{user,token, playlists, active_playlist, track, play}, dispatch] = useStateValue();
    
useEffect(() => {
    
}, [play,track])
  
    function stop__play(){
        dispatch({
            type : 'SET_PLAY',
            payload: false
        
          })
    }
    return (
        <div className='footer'>
<SpotifyPlayer 
        token = {token? token:null}
        showSaveIcon
        callback={state =>{if(!state.isPlaying)stop__play()}}
        play={play?play:null}
        uris={track?.uri}
        styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#42f575',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
       
        />
        </div>
        
    )
}
