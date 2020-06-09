export default class SpotifyAPIException{
    constructor({status,message}){
        this.status = status;
        this.message = message;
    }
}