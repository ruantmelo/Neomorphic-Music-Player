import React, { memo } from 'react';
import {Container, TopBar, MusicImg, SortBar, MusicInfo, PlayerButtons} from './style'
import {MusicSlider} from '../../components/Slider/index';
import {allmusics} from '../../musics';
import SpotifyPlayer from '../../utils/SpotifyPlayer';
import TokenContext from '../../utils/TokenContext';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            music: {},
            shuffle: false,
            repeat: false,
            paused: true,
            currentTime: 0,
        }
        this.audioRef = React.createRef();
        this.spotifyPlayer = new SpotifyPlayer(localStorage.getItem('@music-player/spotify-token'));
    }

    static contextType = TokenContext;
    

    UNSAFE_componentWillMount(){
        const musicID = this.props.match.params.id;
        console.log('MusicId ' + musicID);
        let music; 
        
        allmusics.forEach(m => {
            // eslint-disable-next-line 
            if (musicID == m.id) music = m;
        });
        this.setState({music});      
    }
    
    componentDidMount(){ 
        this.handleCurrent  = this.audioRef.current.ontimeupdate = (e) => this.setState({currentTime: e.target.currentTime});
    }

    componentWillUnmount(){
        clearInterval(this.handleCurrent);
    }

    toggle = (option = '') => {
        
        const music = this.audioRef.current;

        switch (option) {
            case 'pause':
                music.pause();
                this.setState({paused: true})
                break;

            case 'play':
                music.play();
                this.setState({paused: false})
                break;

            default:
                if (music.paused){
                    music.play();
                    this.setState({paused: false})
                }else{
                    music.pause();
                    this.setState({paused: true})
                }
        }

    }

    changeTime = (value) => {
        let music = this.audioRef.current;
        this.setState({currentTime: value})
        music.currentTime = value;
    }



    prev = () => {
        const musicID = this.state.music.id - 1;
        let music = '';
        allmusics.forEach((m) => {
            // eslint-disable-next-line 
            if (m.id == musicID) music = m;
        })

        if (music) this.setState({music}); else music = allmusics[0];
        this.toggle('pause');

    }

    next = () => {
        const musicID = this.state.music.id + 1;
        let music = '';

        allmusics.forEach((m) => {
            // eslint-disable-next-line 
            if (m.id == musicID) music = m;
        })

        if (music) this.setState({music}); else music = allmusics[0];
        this.toggle('pause');
    }

    //DEFINIR O STATE E ARMAZENAR PROPRIEDADES NO LOCAL STORAGE;
    //FAZER TOCAR MUSICA CLICADA
    //SINCRONIZAR O SLIDER COM A MUSICA

    
    
    render(){
        
        const Music =  require(`../../musics/${this.state.music.src}`);
        const music = { ...this.state.music } 

        console.log(this.spotifyPlayer);
        return(
            <Container>
                <TopBar/>
                <MusicImg src = {this.state.music.imgSrc}/>
                <SortBar/>
                <audio onEnded = {() => this.next()} ref = {this.audioRef}  src = {Music}/>
                <MusicInfo name = {music.name} artist = {music.artist}/>
                <MusicSlider changeTime = {this.changeTime} duration = {music.duration} currentTime = {this.state.currentTime}/>
                <PlayerButtons prev = {this.prev} next = {this.next} paused ={this.state.paused }toggle = {this.toggle}/>
            </Container>
           
        )
    }
}

export default memo(Player);