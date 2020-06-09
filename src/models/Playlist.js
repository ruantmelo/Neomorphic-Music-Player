export default class Playlist{
    constructor({img, name, owner,  id, spotify_uri, description}){
        this.img = img;
        this.name = name;
        this.id = id;
        this.spotify_uri = spotify_uri;
        this.owner = owner;
        this.description = description; 
    }
}