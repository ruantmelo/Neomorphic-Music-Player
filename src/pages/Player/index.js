import React, { memo } from 'react';
import {Container, TopBar, MusicImg, SortBar, MusicInfo, PlayerButtons} from './style'
import {MusicSlider} from '../../components/Slider/index';
import musics , {allmusics} from '../../musics';

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
    }

    UNSAFE_componentWillMount(){
        const musicID = this.props.match.params.id;
        console.log('MusicId ' + musicID);
        let music; 
        
        allmusics.forEach(m => {
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

    toggleMusic = () => {
        let music = this.audioRef.current;

        if (music.paused){
            music.play();
            this.setState({paused: false})
        }else{
            music.pause();
            this.setState({paused: true})
        }
    }

    changeTime = (value) => {
        let music = this.audioRef.current;
        this.setState({currentTime: value})
        music.currentTime = value;
    }

    //DEFINIR O STATE E ARMAZENAR PROPRIEDADES NO LOCAL STORAGE;
    //FAZER TOCAR MUSICA CLICADA
    //SINCRONIZAR O SLIDER COM A MUSICA

    
    
    render(){
        
        const Music =  require(`../../musics/${this.state.music.src}`);
        const music = { ...this.state.music } 
        return(
            <Container>
                <TopBar/>
                <MusicImg src = {this.state.music.imgSrc}/>
                <SortBar/>
                <audio ref = {this.audioRef}  src = {Music}/>
                <MusicInfo name = {music.name} artist = {music.artist}/>
                <MusicSlider changeTime = {this.changeTime} duration = {music.duration} currentTime = {this.state.currentTime}/>
                <PlayerButtons paused ={this.state.paused }toggleMusic = {this.toggleMusic}/>
            </Container>
           
        )
    }
}

export default memo(Player);