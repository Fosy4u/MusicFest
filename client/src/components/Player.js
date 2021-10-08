import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home'

export default function Player({spotify}) {
    return (
        <div className='player'>
            <div className='player_body'>
        {/*sidebar*/}
        <Sidebar/>

         {/*body*/}
         <Route exact={true} path="/" component={Home} />
                    <Route path="/body" component={() => <Body spotify = {spotify}/>} />
                    
         
            </div>
         
         {/*footer*/}
         <Footer/>
        </div>
    )
}

