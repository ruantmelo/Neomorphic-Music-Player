import SpotifyAPIException from './SpotifyAPIException';
import SpotifyConverter from './SpotifyConverter';
//MELHORAR O METODO DE PEGAR AS IMAGENS (NAO ACESSANDO DIRETAMENTE O ITEM DO ARRAY)
//Criar metodo para criar a string de queryParams 

async function handleErrors(response) {
    if (!response.ok) {
        let badResponse = await response.json();
        throw new SpotifyAPIException(badResponse.error);
    }

    if(response.status !== 204){
        
        return response.json();
    }

    return response;
  }

export default class SpotifyService{

    constructor(){
        throw new Error('Cannot constructor SpotifyService ')
    }

    static async getNewReleases(){  //TROCAR PARA FEATURED PLAYLISTS?
        const url = 'https://api.spotify.com/v1/browse/new-releases'
        const token = localStorage.getItem('@reactify-rm/spotify-token');

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
                .then(handleErrors)
                .then(response => response.albums.items)
                .then(albums => albums.filter((album => album.album_type === 'single')))
                .then(recentTracks => recentTracks.map(track => SpotifyConverter.music(track)))
                // .then(response => response.items) //API retorna no máximo 20 músicas por padrão.
    }

    static async getRecentlyTracks(){
        const url = 'https://api.spotify.com/v1/me/player/recently-played?market=BR';
        const token = localStorage.getItem('@reactify-rm/spotify-token');
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
                .then(handleErrors)
                .then(response => response.items)
                .then(recentTracks => recentTracks.map(({track}) => SpotifyConverter.music(track)))
    }

    static async refreshToken(){
        const rt = localStorage.getItem('@reactify-rm/spotify-refresh_token');
        const url = `http://localhost:8888/refresh_token?refresh_token=${rt}`;

        const config = {
            method: 'GET',
        }

        return fetch(url, config)
                .then(handleErrors)
                .then(({access_token}) => localStorage.setItem('@reactify-rm/spotify-token', access_token))
        
    }

    static async getSavedTracks(offset = 0){
        const url = `https://api.spotify.com/v1/me/tracks?market=BR&offset=${offset}`;
        const token = localStorage.getItem('@reactify-rm/spotify-token');

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
                .then(handleErrors)
                .then(response => response.items)
                .then(savedTracks => savedTracks.map(({track}) => SpotifyConverter.music(track)))

        }

    
    static async getTrack(id){
        const url = `https://api.spotify.com/v1/tracks/${id}`
        const token = localStorage.getItem('@reactify-rm/spotify-token');

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
                .then(handleErrors)
                .then(track => SpotifyConverter.music(track))
    }

    static async getFeaturedPlaylists(){
        const country = 'US' //Tornar isso dinamico
        // const locale = 'es_US'
        const timestamp = new Date().toISOString();
        const url = `https://api.spotify.com/v1/browse/featured-playlists?timestamp=${timestamp}&country=${country}`
        
        const token = localStorage.getItem('@reactify-rm/spotify-token');

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
                .then(handleErrors)
                // .then(response => console.log(response))
                .then(featured => (
                    {
                        message: featured.message , 
                        playlists: featured.playlists.items.map(playlist => SpotifyConverter.playlist(playlist))
                    
                    })
                )

    }

    static async getRecommendations(){
        const url = `https://api.spotify.com/v1/recommendations`;
        const token = localStorage.getItem('@reactify-rm/spotify-token');
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
                .then(handleErrors)
                .then(response => response.items)
    }

    static async getUserTopArtists(){
        const url = 'https://api.spotify.com/v1/me/top/artists';

        const token = localStorage.getItem('@reactify-rm/spotify-token');
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
                .then(handleErrors)
                .then(response => response.items)
                .then(artists => artists.map(artist => SpotifyConverter.artist(artist)))
                // .then(response => console.log(response))
                // .then(topArtists => topArtists.map(({track}) => new Music(
                //     {
                //         img: track.album.images[1].url,
                //         name: track.name,
                //         artists: track.artists,
                //         id: track.id,
                //         spotify_uri: track.uri,
                //         track_number: track.track_number
                //     })
                //     )
                // )
    }

    static async getUserInformation(){
        const url = `https://api.spotify.com/v1/me`

        const token = localStorage.getItem('@reactify-rm/spotify-token');
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
                .then(handleErrors)
    }

    static async search(keywords = ''){
        keywords = keywords.replace(/\s+/g, '+');
        const url = `https://api.spotify.com/v1/search?q=${keywords}&type=album,artist,playlist,track`

        const token = localStorage.getItem('@reactify-rm/spotify-token');
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
                .then(handleErrors)
                .then(response => response)
                .then(response => (
                    {
                        albums: response.albums.items.map(album => SpotifyConverter.album(album)),
                        artists: response.artists.items.map(artist => SpotifyConverter.artist(artist)),
                        musics: response.tracks.items.map(music => SpotifyConverter.music(music)),
                        playlists: response.playlists.items.map(playlist => SpotifyConverter.playlist(playlist)),
                    })
                )
                .then(data => data)
    }
}