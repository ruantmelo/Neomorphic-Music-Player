import React, { memo } from 'react';
import {PageContainer, TopBar, MusicImg, SortBar, MusicInfo, PlayerButtons} from './style'
import {MusicSlider} from '../../components/Slider/index';
import {SpotifyPlayer} from '../../utils/SpotifyPlayer';
import ErrorMessage from '../../components/ErrorMessage';
import {LoadingCircle} from '../../components/Loading/style'
import SpotifyService from '../../utils/SpotifyService';
import SpotifyAPIException from '../../utils/SpotifyAPIException';
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
            context: '',
            currentTime: 0,
        }
        this.isChangingTime = false;
        this.currentUpdater = null

        
    }

    async componentDidMount(){
        window.document.title = 'Reactify | Player'
        const queryParams = new URLSearchParams(window.location.search);
        const paramContext = queryParams.get('context');
        const paramPosition = queryParams.get('position');
        const paramID = queryParams.get('id');

        try{

            this.spotifyPlayer = await SpotifyPlayer.getInstance();
            this.spotifyPlayer.player.addListener('player_state_changed', async (playerState)=> { 

                if (!playerState) {
                    if (!this.state.error){
                        this.setState({error: new SpotifyAPIException({
                            status: 'Disconnected',
                            message: 'User is not playing music through the Reactify',
                        }) });
                    }
                    return console.error('User is not playing music through the Reactify')
                };

                console.log('state player' , playerState)
                let newState = {};

                //Setando o Context do State
                    if (playerState.context.uri !== this.state.context){
                        if(playerState.context.uri){
                            newState.context = playerState.context.metadata.context_description
                        }else{
                            newState.context = 'Favourites'
                        }
                    }

                //Setando o Shuffle do State
                    if (playerState.shuffle !== this.state.shuffle) {
                        newState.shuffle = playerState.shuffle
                    }
                

                //Setando o Repeat do State
                    if (playerState.repeat_mode !== 2){
                        if (this.state.repeat){
                            newState.repeat = false
                        }
                    }else if(!this.state.repeat){
                        newState.repeat = true;
                    }

                //Setando o Paused do State    

                    if(playerState.paused !== this.state.paused){
                        if (playerState.paused === true){
                            clearInterval(this.currentUpdater)
                            newState.paused = true;
                            this.currentUpdater = null;
                        } else{
                            newState.paused = false;
                            if (this.currentUpdater === null) {
                                this.currentUpdater = setInterval(() => {
                                this.setState(state => ({currentTime: state.currentTime +  1000}))
                            }, 1000)}
                        }
                    }

                //Vendo se a música foi alterada
                    const currentURI = playerState.track_window.current_track.uri;
                    if (this.state.music.spotify_uri !== currentURI){
                        const music = await SpotifyService.getTrack(playerState.track_window.current_track.id)
                        newState.music = {...music}      
                    }

                if (this.state.loading) newState.loading = false;
                if (this.state.error) newState.error = null;
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
            this.setState({loading: false , error: err})
        }

    }

    //IMPLEMENTAR O COMPONENT SHOULDUPDATE


    toggleRepeat = async () => {
        if (this.state.repeat){
            await this.spotifyPlayer.setRepeatMode('off');
        }else{
            await this.spotifyPlayer.setRepeatMode('track');
        }

    }

    toggleShuffle = async () => {
        if (this.state.shuffle){
            await this.spotifyPlayer.setShuffle('false');
        }else{
            await this.spotifyPlayer.setShuffle('true');
        }
    }

    togglePlay = async () => { //Metodo togglePlay é do proprio player, a rapidez dele nao faz  tao necessário setar o state por aq.
        // const newPaused = this.state.paused? true: false
        // if (newPaused){
        //     clearInterval(this.currentUpdater);
        //     this.currentUpdater = '';

        // }else{
        //     if(!this.currentUpdater){
        //         this.currentUpdater = setInterval(() => {
        //             this.setState(state => ({currentTime: state.currentTime +  1000}))
        //         }, 1000)
        //     }
        // }
        // this.setState({paused: newPaused})
        this.spotifyPlayer.togglePlay();
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
            <PageContainer>
                {this.state.loading? <LoadingCircle/> : (this.state.error? <ErrorMessage error = {this.state.error}/>:
                <>
                <TopBar context = {this.state.context} />
                <MusicImg src = {music.img}/>
                <SortBar repeat = {this.state.repeat} shuffle = {this.state.shuffle} toggleRepeat = {this.toggleRepeat} toggleShuffle = {this.toggleShuffle} />
                <MusicInfo  name = {music.name} artists = {music.artists}/>
                {/* Mudar o nome para MusicProgress? */}
                <MusicSlider changeTime = {this.changeTime} duration = {music.duration} currentTime = {this.state.currentTime}/>
                <PlayerButtons prev = {this.prev} next = {this.next} paused ={this.state.paused }togglePlay = {this.togglePlay}/>
                </>
                )
            }
            </PageContainer>
            
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