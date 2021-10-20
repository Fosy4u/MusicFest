import React from 'react';
import { useStateValue } from '../utilities/StateProvider';
import './Body.css'
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

export default function Body({spotify}) {
const [{active_playlist}, dispatch] = useStateValue()

function handle__play__circle__click(){
    if(active_playlist){
        dispatch({
            type : 'SET_TRACK',
            payload: active_playlist.tracks.items[0].track
        
          });
          dispatch({
            type : 'SET_PLAY',
            payload: true
        
          })
    }
}

    return (
        <div className='body'>
         <Header spotify = {spotify}/>

         <div className="body__info">
             <div> 
             <img className='body__img'  src={active_playlist? active_playlist.images[0].url: null } alt="" />
             <div className="body__infoText">
                 <strong>PLAYLIST</strong>
                 <h2>{active_playlist?.name}</h2>
                 <p>{active_playlist?.description}</p>

             </div>
             </div>
             <div className="body__songs">
                 <div className="body__icons">
                     <span onClick={handle__play__circle__click}>
                     <PlayCircleFilledIcon className= 'body__shuffle'/>
                     </span>
                     
                     <FavoriteIcon fontSize='large'/>
                     <MoreHorizIcon/>

                 </div>
               
                 {active_playlist?.tracks.items.map(item => 
                    <SongRow track={item.track}/>)}
             </div>
         </div>
        </div>
    )
}
