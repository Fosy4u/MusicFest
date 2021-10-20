//sportify auth endpoint
export const authEndpoint = 'https://accounts.spotify.com/authorize';

const rediectUri = 'http://localhost:3000/';
const clientId = '7c94905bdafb43209c0f2b19bdcedb5e'
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'streaming',
    'user-library-read',
    'user-library-modify',
    'user-read-email',
    'user-read-playback-state',
    'user-read-private'

]

export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
},{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${rediectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`