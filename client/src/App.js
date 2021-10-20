import React,{useEffect, useState} from "react";
import AppLaunch from "./components/AppLaunch";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utilities/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./utilities/StateProvider";
import { Link, Route, Switch } from 'react-router-dom';
import UseAuth from "./components/UseAuth";


const code = new URLSearchParams(window.location.search).get('code')

const spotify = new SpotifyWebApi({
  clientId: '7c94905bdafb43209c0f2b19bdcedb5e'
});


function App() {

  
  const [{user,token, playlists, active_playlist}, dispatch] = useStateValue();
  



  return (
    <div className="App">
      
      {
  code? (<AppLaunch code = {code} spotify = {spotify}/>):
  <Login />
}

     
    </div>
  );
}

export default App;
