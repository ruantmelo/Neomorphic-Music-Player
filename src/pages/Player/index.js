import React, { memo } from 'react';
import {Container, TopBar, MusicImg, SortBar, MusicInfo, PlayerButtons} from './style'
import {MusicSlider} from '../../components/Slider/index';
import {SpotifyPlayer} from '../../utils/SpotifyPlayer';
import ErrorMessage from '../../components/ErrorMessage';
import {LoadingCircle} from '../../components/Loading/style'
import SpotifyService from '../../utils/SpotifyService';
// import TokenContext from '../../utils/TokenContext';
  

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            music: {},
            shuffle: false,
            repeat: false,
            paused: true,
            currentTime: 0,
        }
        this.isChangingTime = false;
        this.currentUpdater = null

        
    }

    async componentDidMount(){
        const queryParams = new URLSearchParams(window.location.search);
        const paramContext = queryParams.get('context');
        const paramPosition = queryParams.get('position');
        const paramID = queryParams.get('id');

        try{

            this.spotifyPlayer = await SpotifyPlayer.getInstance();
            this.spotifyPlayer.player.addListener('player_state_changed', async (playerState)=> { 

                if (!playerState) return console.error('User is not playing music through the Web Playback SDK');
                console.log('state player' , playerState)
                let newState = {};

                //Setando o Shuffle do State
                    if (playerState.shuffle){ 
                        if (!this.state.shuffle){
                            newState.shuffle = true;
                        }
                    }else{
                        if (this.state.shuffle){
                            newState.shuffle = false;
                        }
                    }


                //Setando o Repeat do State
                    if (playerState.repeat_mode !== 2){
                        if (this.state.repeat){
                            newState.repeat = false
                        }
                    }else if(!this.state.repeat){
                        newState.repeat = true;
                    }

                    if (playerState.paused !== this.state.paused) {
                        newState.paused = playerState.paused

                       
                    };

                    if (playerState.paused === true){
                        clearInterval(this.currentUpdater)
                        this.currentUpdater = ''
                    } else{
                        if (this.currentUpdater === '') {
                            this.currentUpdater = setInterval(() => {
                            this.setState(state => ({currentTime: state.currentTime +  1000}))
                        }, 1000)}
                    }
              
                //Vendo se a música foi alterada
                    const currentURI = playerState.track_window.current_track.uri;
                    if (this.state.music.spotify_uri !== currentURI){
                        //CRIAR METODO PARA TRANSFORMAR UM TRACK OBJECT EM UM OBJETO MUSIC DO JEITO QUE EU QUERO?
                        const music = await SpotifyService.getTrack(playerState.track_window.current_track.id)
                        newState.music = {...music}      
                    }

                if (this.state.loading) newState.loading = false

                newState.currentTime = playerState.position

                this.setState(newState);
            });
            

            if (paramContext){
                //Ira tocar músicas com um contexto especifico
                if (paramContext === 'favourites'){ //Irá tocar as musicas salvas 
                    await this.spotifyPlayer.playFromSavedTracks(paramID); // Irá tocar as musicas salvas de um determinado indice
                    
                }else{
                    await this.spotifyPlayer.playFrom(paramContext, paramPosition);
                }
                
            }else if(paramID){ //Irá tocar uma certa música no contexto do seu album
                await this.spotifyPlayer.playSong(paramID)
            }else{ //Irá tocar as músicas salvas do começo
                await this.spotifyPlayer.playFromSavedTracks();
            }
        
        }catch(err){
            console.log(err);
        }
        finally{
            this.currentUpdater = setInterval(() => {
                this.setState(state => ({currentTime: state.currentTime +  1000}))
            }, 1000)
        }

        
    }

    //IMPLEMENTAR O COMPONENT SHOULDUPDATE


    repeat = async () => {
        if (this.state.repeat){
            await this.spotifyPlayer.setRepeatMode('off');
        }else{
            await this.spotifyPlayer.setRepeatMode('track');
        }

    }

    shuffle = async () => {
        if (this.state.shuffle){
            await this.spotifyPlayer.setShuffle('false');
        }else{
            await this.spotifyPlayer.setShuffle('true');
        }
    }

    toggle = async (option = '') => {

        switch (option) {
            case 'pause':
                await this.spotifyPlayer.pause();
                break;

            case 'play':
                await this.spotifyPlayer.play();
                this.setState({paused: false})
                break;

            default:
                if (this.state.paused){
                    await this.spotifyPlayer.play();
                    this.setState({paused: false})
                }else{
                    this.spotifyPlayer.pause();
                    this.setState({paused: true})
                }
        }

    }

    changeTime = async (value) => {
        this.setState({currentTime: value})
        await this.spotifyPlayer.seekToPosition(value);
    }


    prev =  async () => {
        await this.spotifyPlayer.SkipToPrevious();
     }

    next = async () => {
       await this.spotifyPlayer.SkipToNext();
    }
        
    render(){
        const music = this.state.music
        return(
            <Container>
                {this.state.loading? <LoadingCircle/> : (this.state.error? <ErrorMessage error = {this.state.error}/>:
                <>
                <TopBar />
                <MusicImg src = {music.img}/>
                <SortBar repeat = {this.state.repeat} shuffle = {this.state.shuffle} toggleRepeat = {this.repeat} toggleShuffle = {this.shuffle} />
                <MusicInfo  name = {music.name} artists = {music.artists}/>
                {/* Mudar o nome para MusicProgress? */}
                <MusicSlider changeTime = {this.changeTime} duration = {music.duration} currentTime = {this.state.currentTime}/>
                <PlayerButtons prev = {this.prev} next = {this.next} paused ={this.state.paused }toggle = {this.toggle}/>
                </>
                )
            }
            </Container>
            
            // <Container>
            //     <TopBar/>
            //     <MusicImg src = {this.state.music.imgSrc}/>
            //     <SortBar/>
            //     <audio onEnded = {() => this.next()} ref = {this.audioRef}  src = {Music}/>
            //     <MusicInfo name = {music.name} artist = {music.artist}/>
            //     <MusicSlider changeTime = {this.changeTime} duration = {music.duration} currentTime = {this.state.currentTime}/>
            //     <PlayerButtons prev = {this.prev} next = {this.next} paused ={this.state.paused }toggle = {this.toggle}/>
            // </Container>
           
        )
    }
}

export default memo(Player);