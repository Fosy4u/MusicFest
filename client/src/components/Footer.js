import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Slider, Grid } from '@mui/material';

export default function Footer() {
    return (
        <div className='footer'>
         <div className="footer__left">
         <img className='footer__albumLogo' src='https://mosaic.scdn.co/640/ab67616d0000b2732dd4e7988b07d6fa6a09d6faab67616d0000b273568902770a5abaf05d1d459bab67616d0000b2735d2bd11398ee8d07900b6107ab67616d0000b273df831a49692a667a35664430' alt='plalist image'/>
         <div className="footer__songInfo">
             <h4>Yeah</h4>
             <p>Usher</p>
         </div>
         </div>
         <div className="footer__center">
             <ShuffleIcon className="footer__green"></ShuffleIcon>
             <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
             <PlayCircleOutlineIcon fontsize='large' className="footer__icon"></PlayCircleOutlineIcon>
             <SkipNextIcon className="footer__icon"></SkipNextIcon>
             <RepeatIcon className="footer__green"></RepeatIcon>
             </div>
         <div className="footer__right">
             <Grid container spacing={2}>
                 <Grid item>
                     <PlaylistPlayIcon/>
                 </Grid>
                 <Grid item>
                     <VolumeDownIcon/>
                 </Grid>
                 <Grid item xs>
                     <Slider aria-labelledby= 'continuous-slide'/>
                 </Grid>
             </Grid>
             </div>
        </div>
    )
}
