import React,{useState, useEffect} from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../utilities/StateProvider';
import SpotifyWebApi from "spotify-web-api-js";

import SongRow from './SongRow';

const spotify = new SpotifyWebApi();
export default function Search() {
    const [{user,token, track}, dispatch] = useStateValue();
    const [search, setSearch] = useState()
    const [search__result, setSearch__result] = useState([])
    const [playing__track, setPlaying__track] = useState()
   


    useEffect(() => {
        if(token){
            spotify.setAccessToken(token); 
        }
    }, [token])

    useEffect(() => {
    if(!search){
        setSearch__result([])
    }
    let cancel = false
    if(search && token){
    
    
    spotify.searchTracks(search).then((res) =>{
        if (cancel) return
             setSearch__result( res.tracks.items.map((track) =>{
            //getting smallest image for albumUrl
            const smallest__height = Math.min.apply(Math, track.album.images.map((image) => {return image.height}));
            const smallest__album__image = track.album.images.find(image => image.height <= smallest__height )
              
 
           return {
               artists: track.artists,
               name: track.name,
               uri : track.uri,
               image__url : smallest__album__image.url
              
               
           }
        }))
            
        
       })
     
    }

   //canceling a search if there is another search (good for performance)
    return() => {cancel = true}
    }, [token, search])
    

    
    function select__track (track) {
        setPlaying__track(track);
        setSearch('')
     }

    return (
        <div className= 'search'> 
            <div className="search__head">
                <div className="search__left">
                        <SearchIcon/>
                        <input placeholder= 'Search for Artists, Songs, or Albums' type = 'text' onChange={e =>{setSearch(e.target.value)}}/>
                </div>
            <   div className="search__right">
                        <Avatar src={user?.images[0]?.url} alt='FO'/>
                        <h4>{user?.display_name}</h4>
                </div> 
            </div>
            
            <div className="search__body">
              
                {search__result.map((track) => 
                     <SongRow  track={track} key={track.uri} />
                )}
               
            </div>
        </div>
    )
}