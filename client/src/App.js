import React,{useEffect, useState} from "react";
import Player from "./components/Player";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utilities/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./utilities/StateProvider";
import { Link, Route, Switch } from 'react-router-dom';


const spotify = new SpotifyWebApi();

function App() {

 
  const [{user,token, playlists, active_playlist}, dispatch] = useStateValue();

useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash = ''
  const _token = hash.access_token
  if (_token){
    dispatch({
      type: 'SET_TOKEN',
      payload : _token
    });
    //set access token for the spotiywebAPI
  spotify.setAccessToken(_token);
  //get user with spotifywebAPI
  spotify.getMe().then((user) => {console.log('🧔', user ); 
    dispatch({
    type: 'SET_USER',
    payload: user
  })})
//get playlsits with spotifywebAPI
  spotify.getUserPlaylists().then ((playlists) => 
  dispatch({
    type : 'SET_PLAYLISTS',
    payload: playlists

  }))
  }
  

  
  console.log('spotify :', spotify)
  console.log('spotify__play :', spotify.play())
  
  
  return () => {
    
  }
}, [user, token, playlists])


  return (
    <div className="App">
      
{
  token? (<Player spotify = {spotify}/>):
  <Login />
}

     
    </div>
  );
}

export default App;
