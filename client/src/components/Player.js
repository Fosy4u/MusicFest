import React,{useState, useEffect, useRef, usePrevious} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateValue } from '../utilities/StateProvider';
import './Player.css';
import axios from 'axios';
import { useHistory } from "react-router-dom"


export default function Player() {
    const [{user,token, playlists, active_playlist, track, play}, dispatch] = useStateValue();
    
    const prev__track = usePrevious(track)
    const history = useHistory()
useEffect(() => {
    if(play){
        
        if(prev__track != track){
         
            const lyrics = axios.get('http://localhost:3001/lyrics', {
                params:{
                    track: track.name,
                    artist: track.artists[0].name
                }
            }).then(res =>{
                dispatch({
                    type : 'SET_LYRICS',
                    payload: res.data.lyrics
                
                  })


            })
            
        }
        
    }
}, [play,track])

function usePrevious (value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, []);
    return ref.current
}
  
    function stop__play(){
        dispatch({
            type : 'SET_PLAY',
            payload: false
        
          })
    }
    

    function lyrics__page(){
        history.push('/lyrics')
    }
    return (
        <div className='footer'>
<SpotifyPlayer 
        token = {token? token:null}
        showSaveIcon
        
        callback={state =>{if(state.isPlaying)lyrics__page()}}
       
        play={play?play:null}
        uris={track?[track.uri]:[]}
        name='MusicFest'
        autoPlay={true}
        persistDeviceSelection= {true}
        magnifySliderOnHover={true}
        
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
