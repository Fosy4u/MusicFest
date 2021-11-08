const express = require('express');
const spotify__web__api = require('spotify-web-api-node');
const cors = require('cors')
const bodyParser = require('body-parser')
const lyrics__finder = require('lyrics-finder')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/login', (req, res) => {
    const code = req.body.code
    console.log(code);
const spotify__api = new spotify__web__api({
    redirectUri : "http://localhost:3000/",
clientId : '7c94905bdafb43209c0f2b19bdcedb5e',
clientSecret : '0750ced7642c40aa9866226f02f790ba'
})
spotify__api.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken : data.body.access_token,
        refreshToken : data.body.refresh_token,
        expiresIn : data.body.expires_in
    })
}).catch((err) => {
    console.log(err)
    res.sendStatus(400)
})
})

app.post('/refresh', (req, res) => {
    console.log('HIIIIIIIII')
    const refreshToken = req.body.refreshToken;
    const spotify__api = new spotify__web__api({
        redirectUri : "http://localhost:3000/",
    clientId : '7c94905bdafb43209c0f2b19bdcedb5e',
    clientSecret : '0750ced7642c40aa9866226f02f790ba',
    refreshToken
    })
    spotify__api.refreshAccessToken().then((data) =>{
        console.log('data is : ', data);
        res.json({
        accessToken : data.body.accessToken,
        expiresIn : data.body.expiresIn
        })
    }).catch(() => {
        'The access token cannot be refreshed'
    })
})

app.get('/lyrics', async (req, res) => {
const lyrics = await lyrics__finder(req.query.artist, req.query.track) || 'No Lyrics found'
res.json({lyrics})
})


app.listen(3001)