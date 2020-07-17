import Album from '../models/Album';
import Artist from '../models/Artist';
import Music from '../models/Music';
import Playlist from '../models/Playlist';


export default class SpotifyConverter{
    constructor(){
        throw new Error('This class cannot be instantiated');
    }

    static album(al){
        return new Album({
            id: al.id,
            name: al.name,
            img: al.images[1].url? al.images[1].url : '#',
            spotify_uri: al.uri,
            total_tracks: al.total_tracks,
            artists: al.artists,
        })
    }

    static artist(ar){
        return new Artist({
            id: ar.id,
            name: ar.name,
            img: ar.images[1] ? ar.images[1].url : '#',
            genres: ar.genres,
            spotify_uri: ar.uri,
        })
    }

    static music(m){
        return new Music(
            {
                img: m.album.images[0]? m.album.images[0].url : '#',
                name: m.name,
                artists: m.artists,
                id: m.id,
                spotify_uri: m.uri,
                track_number: m.track_number,
                duration: m.duration_ms,
            }) 
    }

    static playlist(pl){
        return new Playlist({
            img: pl.images.length? pl.images[0].url : '#', 
            name: pl.name, 
            owner: pl.owner,  
            id: pl.id, 
            spotify_uri: pl.uri, 
            description: pl.description,
            }) 
    }


}