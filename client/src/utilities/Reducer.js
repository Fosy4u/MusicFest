import { AccessTimeTwoTone } from "@mui/icons-material";

export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item: null,
    active_playlist: null,
    track:null,
    play:false,
    //token: 'BQAUW0doqJWECBUF8Cn48oR5jxm6mFn9jDuSB4PjtLgaR2rnzguhcNe5LyAU5ckCAKbhdFSlneL8hQgJ9wd1rt1tj3i1cgVJDpgk54hN8ldNcOIXuNw0Ekv5VfWdNmb-HfI6ThMWTvBATkzPxHT-Syw'
    };

    const reducer = (state, action) => {
        console.log(action);

        switch(action.type){
            case 'SET_USER' : 
            return {
                ...state, user: action.payload
            };
            case 'SET_TOKEN' : 
            return{
                ...state, token: action.payload
            };
            case 'SET_PLAYLISTS' : {
                return {...state, playlists: action.payload}
                
            }
            case 'SET_ACTIVE_PLAYLIST' : {
                return {...state, active_playlist: action.payload}
                
            }
            case 'SET_TRACK' : {
                return {...state, track: action.payload}
                
            }

            case 'SET_PLAY' : {
                return {...state, play: action.payload}
                
            }
           
            default : return state;
        }

    }

    export default reducer