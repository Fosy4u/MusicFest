import React,{useEffect} from 'react'
import Body from './Body'

import './AppLaunch.css'
import Sidebar from './Sidebar';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import UseAuth from './UseAuth';
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from '../utilities/StateProvider';
import Search from './Search';
import { useHistory } from "react-router-dom"
import Player from './Player';
import Lyrics from './Lyrics';


const spotify = new SpotifyWebApi({
    clientId: '7c94905bdafb43209c0f2b19bdcedb5e'
  });

export default function AppLaunch({code, spotify}) {
    const [{user,token, playlists, active_playlist, track}, dispatch] = useStateValue();
    const accessToken = UseAuth(code)
    console.log('Access token is', accessToken)
    const history = useHistory()

    useEffect(() => {
        if(accessToken){
            //set access token for the spotiywebAPI
          spotify.setAccessToken(accessToken);
            dispatch({
              type: 'SET_TOKEN',
              payload : accessToken
            });
            
          
            }
            else{
                history.push('/')
            }
        
    }, [accessToken])

        useEffect(() => {
            
        if (token){
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
        }, [token, track])
    return (
        <div className='player'>
            <div className='player_body'>
        {/*sidebar*/}
        <Sidebar/>

         {/*body*/}
        <Route exact={true} path="/" component={Home} />
        <Route path="/body" component={() => <Body spotify = {spotify}/>} />
        <Route path="/search" component={Search} />
        <Route path="/lyrics" component={Lyrics} />
                    
         
            </div>
         
         {/*footer*/}
         
         {track? <Player /> :null}
        
           
         </div>
    )
}

