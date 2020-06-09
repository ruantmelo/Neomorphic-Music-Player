export default class Artist{
    constructor({img, name, id, spotify_uri, genres}){
        this.img = img;
        this.name = name;
        this.id = id;
        this.spotify_uri = spotify_uri;
        this.genres = genres;
    }
}