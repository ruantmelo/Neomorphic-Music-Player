export default class Album{
    constructor({img, name, id, spotify_uri, total_tracks , artists}){
        this.img = img;
        this.name = name;
        this.id = id;
        this.spotify_uri = spotify_uri;
        this.total_tracks = total_tracks;
        this.artists = artists;
    }
}