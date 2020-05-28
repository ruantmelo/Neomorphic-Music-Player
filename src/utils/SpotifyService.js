import Music from '../Music';

//MELHORAR O METODO DE PEGAR AS IMAGENS (NAO ACESSANDO DIRETAMENTE O ITEM DO ARRAY)


export default class SpotifyService{
    constructor(token){
        this._token = token;
        // this._header = new Headers({
        //     "Content-Type": 'application/json',
        //     "Authorization": `Bearer ${this._token}`
        //     });
    }

    getNewReleases(){
        const url = 'https://api.spotify.com/v1/browse/new-releases'

        const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${this._token}`
            });

        const config = {
            method: 'GET',
            headers,
            mode: 'cors',
        }

        return fetch(url, config)
                .then(response => response.json())
                .then(response => response.albums.items)
                .then(albums => albums.filter((album => album.album_type === 'single')))
                .then(recentTracks => recentTracks.map(track => new Music(
                    {
                        img: track.images[1].url,
                        name: track.name,
                        artists: track.artists,
                    }) 
                    )
                )
                // .then(response => response.items) //API retorna no máximo 20 músicas por padrão.
    }

    getRecentlyTracks(){
        const url = 'https://api.spotify.com/v1/me/player/recently-played?market=BR';

        const headers = new Headers({
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${this._token}`
            });

        const config = {
            method: 'GET',
            headers,
            mode: 'cors',
        }
    
    
        return fetch(url, config)
                .then(response => response.json())
                .then(response => response.items)
                .then(recentTracks => recentTracks.map(({track}) => new Music(
                    {
                        img: track.album.images[1].url,
                        name: track.name,
                        artists: track.artists,
                    })
                    )
                )
    }

    refresh_token(){

    }

    getSavedTracks(){
        const url = 'https://api.spotify.com/v1/me/tracks?market=BR';

        const headers = new Headers({
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${this._token}`
        });

        const config = {
            method: 'GET',
            headers,
            mode: 'cors',
        }


        return fetch(url, config)
                .then(response => response.json())
                .then(response => response.items)
                .then(savedTracks => savedTracks.map(({track}) => new Music(
                    {
                        img: track.album.images[1].url,
                        name: track.name,
                        artists: track.artists,
                    })
                    )
                )

        }

}