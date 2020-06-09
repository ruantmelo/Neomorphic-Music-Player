// import SpotifyService from "./SpotifyService";
import queryString from 'querystring';
import SpotifyService from './SpotifyService';
import Music from '../models/Music';
import SpotifyAPIException from './SpotifyAPIException';

//FIXME: SO TRABALHA COM 20 MUSICAS POR PLAYLIST;
const isEmpty = obj => {
  for (let a in obj ) return false;
  return true;
}

function handleErrors(response) { //ADAPTAR PARA METODOS QUE NAO RETORNAM
  if (response.error) {
      throw new SpotifyAPIException(response.error);
  }
  return response;
}

let _instance;
let _singletonEnforcer = Symbol();

export class SpotifyPlayer{
    constructor(enforce){
        if (enforce !== _singletonEnforcer) {
          throw('Cannot constructor singleton')
        }
        const token = localStorage.getItem('@music-player/spotify-token');
        return new Promise((resolve, reject) => {
          this.player = new window.Spotify.Player({
            name: 'Reactify',
            getOAuthToken: cb => {cb(token)}
        })
          this._init();
          this.player.addListener('ready', ({ device_id }) => {
            console.log('Connected with Device ID', device_id);
            this.device_id = device_id;
            resolve(this)
        });
          this.player.addListener('initialization_error', ({ message }) => { console.error(message); reject(message)});
        })

        
    }

    _init(){
            // Error handling
            let player = this.player;
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
          
            // Playback status updates
            // player.addListener('player_state_changed', state => { console.log(state); });
          

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
            });
            

            // Connect to the player!
            player.connect();
    }

    static getInstance() {
      if(!_instance) {
        _instance = new SpotifyPlayer(_singletonEnforcer);
      }
      return _instance;
    }

    async setRepeatMode(state = 'track'){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}&device_id=${device_id}`
      const token = localStorage.getItem('@music-player/spotify-token');

      const headers = new Headers({
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
          });

      const config = {
          method: 'PUT',
          headers,
          mode: 'cors',
      }

      return fetch(url, config)

    }

    async setShuffle(state = 'true'){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/shuffle?state=${state}&device_id=${device_id}`
      const token = localStorage.getItem('@music-player/spotify-token');

      const headers = new Headers({
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
          });

      const config = {
          method: 'PUT',
          headers,
          mode: 'cors',
      }

      return fetch(url, config)

    }

    async play(){

      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');

        const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });

        const config = {
            method: 'PUT',
            headers,
            mode: 'cors',
        }

        return fetch(url, config)
        // Only one of either context_uri or uris can be specified. If neither is present, calling /play will resume playback. If both are present the request will return 400 BAD REQUEST. If context_uri is a Playlist or Album, or when uris is provided, then offset can be added to specify 
        // starting track in the context. If the provided context_uri corresponds to an album or playlist object, an offset can be specified either by track uri OR position. If both are present the request will return 400 BAD REQUEST. If incorrect values are provided for position or uri, the request may be accepted but with an unpredictable resulting action on playback.
    }

    async pause(){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');

        const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });

        const config = {
            method: 'PUT',
            headers,
            mode: 'cors',
        }

        return fetch(url, config)
    }

    async playFromSavedTracks(id = ''){ //VERIFICAR SE O OFFSET ESTÁ FUNCIONANDO, JA QUE A REQUISICAO FUNFA MESMO COM VALOR INCORRETO
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');
      const uris = await this._getSavedTracksURIs();
      const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });  

      const config = {
            method: 'PUT',
            headers,
            mode: 'cors',
            body: id 
                    ? JSON.stringify({"uris": uris, "offset": {"uri": `spotify:track:${id}`},})
                    : JSON.stringify({"uris": uris},)
      }

      return fetch(url, config)
    }

    async playFrom(context_uri = '', position = 0 ){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');
      const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });  

      const config = {
            method: 'PUT',
            headers,
            mode: 'cors',
            body: position
                    ? JSON.stringify({"context_uri": context_uri , "offset": {"position" : position},})
                    : JSON.stringify({"context_uri": context_uri,})
                     
          }
      return fetch(url, config)
      
    }

    async playSong(id){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');
      const music = await SpotifyService.getTrack(id);
      const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });  

      const config = {
            method: 'PUT',
            headers,
            mode: 'cors',
            body: JSON.stringify({"context_uri": music.album_uri , "offset": {"position" : music.track_number},})
          }
      
      return fetch(url, config)

    }
  
    async _getSavedTracksURIs(){
      const tracks = await SpotifyService.getSavedTracks();
      const URIs = tracks.map((track) => track.spotify_uri);
      return URIs;
    }

    async getCurrentInformation(){
      const url = `https://api.spotify.com/v1/me/player`;
      const token = localStorage.getItem('@music-player/spotify-token');

      const headers = new Headers({
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${token}`
      });

      const config = {
          method: 'GET',
          headers,
          mode: 'cors',
      }
      return fetch(url, config)
              .then(response => response.json()) //eu preciso do ID, artists, img, name, spotify_uri
              .then(handleErrors)
              .then(response => response.item)
              .then(track => new Music(
                {
                  img: track.album.images[1].url,
                  name: track.name,
                  artists: track.artists,
                  id: track.id,
                  spotify_uri: track.uri,
                  album_uri: track.album.uri,
                  duration: track.duration_ms,
                  
                }
              
                )
              )
    }

    async seekToPosition(value){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${value}&device_id=${device_id}`
      const token = localStorage.getItem('@music-player/spotify-token');
      
      const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
            });  

      const config = {
            method: 'PUT',
            headers,
            mode: 'cors',

          }
      
      return fetch(url, config)
    }

    async SkipToNext(){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/next?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');

      const headers = new Headers({
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${token}`
      });

      const config = {
          method: 'POST',
          headers,
          mode: 'cors',
      }
      return fetch(url, config)
    }

    async SkipToPrevious(){
      const device_id = this.device_id;
      const url = `https://api.spotify.com/v1/me/player/previous?device_id=${device_id}`;
      const token = localStorage.getItem('@music-player/spotify-token');

      const headers = new Headers({
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${token}`
      });

      const config = {
          method: 'POST',
          headers,
          mode: 'cors',
      }
      return fetch(url, config)
    }

}


