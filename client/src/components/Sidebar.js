import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import './SidebarOption.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from '../utilities/StateProvider';
import logo from '../icons/logo.PNG';
import SpotifyWebApi from "spotify-web-api-js";
import { Link, Route, Switch } from 'react-router-dom';

export default function Sidebar() {
    const spotify = new SpotifyWebApi();
const [{playlists,token,featured_playlists}, dispatch ] = useStateValue()
const [id, setid] =  useState()

useEffect(() => {
    if(token){
    spotify.setAccessToken(token);   
    }
  
    
}, [playlists,token])
const get_playlist_id = (playlist_id) =>{
    if(playlists){
        
        spotify.getPlaylist(playlist_id).then((res) => {
            dispatch({
              type:'SET_ACTIVE_PLAYLIST',
              payload: res
            })
          })
        
    }
     

}


    return (
        <div className= 'sidebar'>
            <img  className = 'sidebar_logo'src={logo} alt='sidebar logo'/>
            <Link  className='link' to={"/"}> <SidebarOption title = 'Home' Icon = {HomeIcon}/></Link>
            <Link className='link' to={"/search"}><SidebarOption title = 'Search' Icon = {SearchIcon}/></Link>
            <SidebarOption title = 'Your Library' Icon = {LibraryMusicIcon}/>
            <br/>

            <strong className='sidebar__title'> PLAYLISTS </strong>
            <hr />
            {playlists?.items?.map((playlist) => {
               return ( <div key=
                {playlist.id} onClick={ () => {get_playlist_id(playlist.id)}}>
                    <Link className='link' to={`/body/${playlist.id}`}><SidebarOption title = {playlist.name} playlist_id ={playlist.id}/>
                    </Link> </div> )

            })}
           
        </div>

       
    )
}
