import SpotifyService from "./SpotifyService";

export default class SpotifyPlayer{
    constructor(token){
        this._token = token;
        this._spotifyService = new SpotifyService(token);
        this.player = new window.Spotify.Player({
            name: 'Reactify',
            getOAuthToken: cb => {cb(token)}
        })
        // this._init(this.player);
    }

    _init(player){
            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
          
            // Playback status updates
            player.addListener('player_state_changed', state => { console.log(state); });
          
            // Ready
            player.addListener('ready', ({ device_id }) => {
              this._deviceID = device_id;
            });
          
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
            });
          
            // Connect to the player!
            player.connect();
    }

}