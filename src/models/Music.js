export default class Music{
    constructor({img, name, artists, id, spotify_uri, album_uri, track_number , duration}){
        this.img = img;
        this.name = name;
        this.artists = artists;
        this.id = id;
        this.spotify_uri = spotify_uri;
        this.album_uri = album_uri;
        this.track_number = track_number;
        this.duration = duration
    }
}