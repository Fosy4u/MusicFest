import React,{useEffect, useState} from 'react';
import './Home.css'
import { useStateValue } from '../utilities/StateProvider';
import {Avatar} from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaylistCard from './PlaylistCard';
import SpotifyWebApi from "spotify-web-api-js";
import { useHistory } from "react-router-dom"

export default function Home() {
  
    const spotify = new SpotifyWebApi();
    const [{token,user}, dispatch ] = useStateValue();
    const [daily__mix, setDaily__mix] = useState()
    const [release__radar, setRelease__radar] = useState()
    const [top__hit, setTophit] = useState()
    const [discover__weekly, setDiscoverweekly] = useState()
    const [your__time__capsule, setYourtimecapsule] = useState()
    const history = useHistory();

    useEffect(() => {
        if(token){
        spotify.setAccessToken(token); 
        //setting spotify Top-Hit Playlist
        spotify.getCategoryPlaylists('toplists').then((res) => {
            setTophit(res)
          }) 
//setting spotify daily mix playlist
          spotify.getPlaylist('37i9dQZF1E38IGLN7QKhuL').then((res) => {
            setDaily__mix(res)
            
          })
//setting spotify release radar playlist 
          spotify.getPlaylist('37i9dQZEVXbostFjxMXiA2').then((res) => {
            setRelease__radar(res)
            
          })
      //setting spotify discover weekly playlist 
          spotify.getPlaylist('37i9dQZEVXcTFtZZ3R85tK').then((res) => {
            setDiscoverweekly(res)
            
          })
      //setting spotify your time capsule playlist 
          spotify.getPlaylist('37i9dQZF1EuRLv0ysK23m1').then((res) => {
          setYourtimecapsule(res)
            
          }) 
          spotify.getMyCurrentPlaybackState().then(res =>{console.log('name',res.name)})
        
        }

      
        
    }, [token])

    const get_playlist_id = (playlist_id) =>{
    if(token){
        
        spotify.getPlaylist(playlist_id).then((res) => {
            dispatch({
              type:'SET_ACTIVE_PLAYLIST',
              payload: res
            })
            
            
            history.push(`/body/${playlist_id}`)
          })
          
        
    }
     

}
    

    return (
        <div className='home'>
            <div className="home__header">
    <div>
    <ArrowBackIosIcon  className='home__arrow'/>
    <ArrowForwardIosIcon className='home__arrow'/>
</div>
<div>
<Avatar src={user?.images[0]?.url} alt='FO'/>
<h4>{user?.display_name}</h4>
</div>

            </div>
            {user?( <div className="home__body">
                <div className="home__toplist">
                    <span>
                    <h2> Super Playlists Made For You</h2>
                    <div className= 'home__toplist__items'>
                    {daily__mix? <PlaylistCard name = {daily__mix.name} description={daily__mix.description} image__url = {daily__mix.images[0].url}
                     click__func = { () => {get_playlist_id(daily__mix.id)}}/>:null}
                     {release__radar? <PlaylistCard name = {release__radar.name} description={release__radar.description} image__url = {release__radar.images[0].url}
                     click__func = { () => {get_playlist_id(release__radar.id)}}/>:null}
                     {discover__weekly? <PlaylistCard name = {discover__weekly.name} description={discover__weekly.description} image__url = {discover__weekly.images[0].url}
                     click__func = { () => {get_playlist_id(discover__weekly.id)}}/>:null}
                     {your__time__capsule? <PlaylistCard name = {your__time__capsule.name} description={your__time__capsule.description} image__url = {your__time__capsule.images[0].url}
                     click__func = { () => {get_playlist_id(your__time__capsule.id)}}/>:null}
                    </div>
                    </span>
                    <span>
                    <h2> Top List Playlist</h2>
                    
                <div className="home__toplist__items">
                {top__hit?.playlists.items?.map((item) => 
                <PlaylistCard name = {item.name} description={item.description} image__url = {item.images[0].url} click__func = { () => {get_playlist_id(item.id)}}/>)}
                </div>
                    </span>
                
                </div>
                
            </div>): <h2>Loading.....</h2>}
           
        </div>
    )
}
