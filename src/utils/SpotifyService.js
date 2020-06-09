import Music from '../models/Music';
import Artist from '../models/Artist';
import Playlist from '../models/Playlist';
import SpotifyAPIException from './SpotifyAPIException';
import { duration } from '@material-ui/core';
//MELHORAR O METODO DE PEGAR AS IMAGENS (NAO ACESSANDO DIRETAMENTE O ITEM DO ARRAY)
//Criar metodo para criar a string de queryParams 

function handleErrors(response) {
    if (response.error) {
        throw new SpotifyAPIException(response.error);
    }
    return response;
}

export default class SpotifyService{

    constructor(){
        throw new Error('Cannot constructor SpotifyService ')
    }

    static async getNewReleases(){  //TROCAR PARA FEATURED PLAYLISTS?
        const url = 'https://api.spotify.com/v1/browse/new-releases'
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
                .then(response => response.json())
                .then(handleErrors)
                .then(response => response.albums.items)
                .then(albums => albums.filter((album => album.album_type === 'single')))
                .then(recentTracks => recentTracks.map(track => new Music(
                    {
                        img: track.images[1].url,
                        name: track.name,
                        artists: track.artists,
                        id: track.id,
                        spotify_uri: track.uri,
                        track_number: track.track_number,
                        duration: track.duration_ms,
                    }) 
                    )
                )
                // .then(response => response.items) //API retorna no máximo 20 músicas por padrão.
    }

    static async getRecentlyTracks(){
        const url = 'https://api.spotify.com/v1/me/player/recently-played?market=BR';
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
                .then(response => response.json())
                .then(handleErrors)
                .then(response => response.items)
                .then(recentTracks => recentTracks.map(({track}) => new Music(
                    {
                        img: track.album.images[1].url,
                        name: track.name,
                        artists: track.artists,
                        id: track.id,
                        spotify_uri: track.uri,
                        track_number: track.track_number,
                        duration: track.duration_ms,
                    })
                    )
                )
    }

    static async refreshToken(){
        const rt = localStorage.getItem('@music-player/spotify-refresh_token');
        const url = 'http://localhost:8888/refresh_token?refresh_token=' + rt;

        await fetch( url, {method: 'GET' ,mode: 'cors'})
                .then(response => response.json())
                .then(handleErrors)
                .then(newRt => localStorage.setItem('@music-player/spotify-token', newRt))
        
    }

    static async getSavedTracks(offset = 0){
        const url = `https://api.spotify.com/v1/me/tracks?market=BR&offset=${offset}`;
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
                .then(response => response.json())
                .then(handleErrors)
                .then(response => response.items)
                .then(savedTracks => savedTracks.map(({track}) => new Music(
                    {
                        img: track.album.images[1].url,
                        name: track.name,
                        artists: track.artists,
                        id: track.id,
                        spotify_uri: track.uri,
                        track_number: track.track_number,
                        duration: track.duration_ms,
                    })
                    )
                )

        }

    
    static async getTrack(id){
        const url = `https://api.spotify.com/v1/tracks/${id}`
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
                .then(response => response.json()) 
                .then(handleErrors)
                .then(track => new Music(
                    {
                        id: track.id,
                        img: track.album.images[1].url,
                        name: track.name,
                        artists: track.artists,
                        spotify_uri: track.uri,
                        album_uri: track.album.uri,
                        track_number: track.track_number,
                        duration: track.duration_ms,
                    }
                    )
                )
    }

    static async getFeaturedPlaylists(){
        const country = 'US' //Tornar isso dinamico
        // const locale = 'es_US'
        const timestamp = new Date().toISOString();
        const url = `https://api.spotify.com/v1/browse/featured-playlists?timestamp=${timestamp}&country=${country}`
        
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
                .then(response => response.json())
                .then(handleErrors)
                // .then(response => console.log(response))
                .then(featured => (
                        {
                            message: featured.message , 
                            playlists: featured.playlists.items.map((playlist) => 
                                new Playlist({
                                    img: playlist.images[0].url, 
                                    name: playlist.name, 
                                    owner: playlist.owner,  
                                    id: playlist.id, 
                                    spotify_uri: playlist.uri, 
                                    description: playlist.description,
                                    }) 

                        )
                    })
                )

    }

    static async getRecommendations(){
        const url = `https://api.spotify.com/v1/recommendations`;
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
                .then(response => response.json())
                .then(handleErrors)
                .then(response => response.items)
    }

    static async getUserTopArtists(){
        const url = 'https://api.spotify.com/v1/me/top/artists';

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
                .then(response => response.json())
                .then(handleErrors)
                .then(response => response.items)
                .then(artists => artists.map(artist => new Artist({
                    id: artist.id,
                    name: artist.name,
                    img: artist.images[1].url,
                    genres: artist.genres,
                    spotify_uri: artist.uri,
                }) ))
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
                .then(response => response.json())
                .then(handleErrors)
    }
}