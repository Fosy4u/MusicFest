import React,{useEffect, useState} from 'react'
import './Lyrics.css'
import { useStateValue } from '../utilities/StateProvider';
import {Avatar} from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useHistory } from "react-router-dom"
import logo from '../icons/logo.PNG';





export default function Lyrics() {
    const [{user,lyrics, track, play}, dispatch] = useStateValue();
    const [display__lyrics, setdisplay__lyrics] = useState(false) 
    const history = useHistory()


    useEffect(() => {
        if(lyrics && lyrics!== 'No Lyrics found'){
            setdisplay__lyrics(true)
        }
        else{
            setdisplay__lyrics(false)
        }
        
    }, [lyrics, track])

function go__back(){
history.goBack()
}

function go__forward(){
    history.goForward()
    }


    return (
        <div className='lyrics'>

        <div className="lyrics__header">
            
        <div>
    <span onClick={go__back}><ArrowBackIosIcon  className='lyrics__arrow'/></span>
   <span onClick={go__forward}> <ArrowForwardIosIcon className='lyrics__arrow'/></span>
</div>
<div>
<Avatar src={user?.images[0]?.url} alt='FO'/>
<h4>{user?.display_name}</h4>
</div> 

        </div>
        <div className={display__lyrics? "lyrics__body": "no__lyrics__body"}>
        {display__lyrics? (<div>
                <div className="lyrics__name">
                    {track?.name} - {track?.artists[0].name}
                </div>
                <div className='lyrics__text'> 
                {lyrics}

            </div>
            </div>): 
            (<div><h2>Oops! Lyrics not found</h2></div>)}
            <br/>
            <div>
            <img  className = {display__lyrics?'lyrics__logo':'no__lyrics__logo'}src={logo} alt='logo'/>
            </div>
        </div>

            
        </div>
    )
}
