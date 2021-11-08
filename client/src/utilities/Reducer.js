import { AccessTimeTwoTone } from "@mui/icons-material";

export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item: null,
    active_playlist: null,
    track:null,
    play:false,
    lyrics:null,
    token:null
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

            case 'SET_LYRICS' : {
                return {...state, lyrics: action.payload}
                
            }
           
            default : return state;
        }

    }

    export default reducer