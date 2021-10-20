import React, {useState, useEffect} from 'react';
import { useStateValue } from '../utilities/StateProvider';
import axios from 'axios';
import { useHistory } from "react-router-dom"

export default function UseAuth(code) {
    const history = useHistory();
    const [{user,token, playlists, active_playlist}, dispatch] = useStateValue();
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
   
    useEffect(() => {
        
        axios.post('http://localhost:3001/login', {
            code
        }).then((res) => {
           
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            
           
        }).catch(() =>{
            history.push('/')
        })
        
    }, [code])

    useEffect(() => {
        if(refreshToken || expiresIn ) {
            console.log('this is :',refreshToken)
       const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
            refreshToken,
        }).then((res) => {
           
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
          
        }).catch(() =>{
            history.push('/')
        })
        }, (expiresIn - 60)*1000)

        return () =>  clearInterval(interval)
        
    }
    
  
    
        
    }, [refreshToken, expiresIn])


    
    return accessToken
}
