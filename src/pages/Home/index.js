import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import {SectionTitle, Container} from './style';
import MusicCarousel from '../../components/MusicCarousel';
import TokenContext from '../../utils/TokenContext';
import SpotifyService from '../../utils/SpotifyService';

class Home extends React.Component {

    static contextType = TokenContext;
    constructor(props) {
        super(props);
        this.state = {
            favourites: [],
            recent: [],
            releases: [],
        }   
    }
    
    async componentDidMount(){
        this.spotifyService = new SpotifyService(this.context);
        const favourites = await this.spotifyService.getSavedTracks();
        const recent = await this.spotifyService.getRecentlyTracks();
        const releases = await this.spotifyService.getNewReleases();
        this.setState({favourites, recent, releases})
    }

    render() {
        const {favourites, recent, releases} = this.state;
        return (
            <Container>
                <section>
                    <SectionTitle>Favourites</SectionTitle>
                    <MusicCarousel  musics = {favourites}/>
                </section>
                
                <section>
                    <SectionTitle>Recently Played</SectionTitle>
                    <MusicCarousel  musics = {recent}/>
                </section>
                
                <section>
                    <SectionTitle>New Releases</SectionTitle>
                    <MusicCarousel musics = {releases}/>
                </section>
                <BottomNavigation/>
            </Container>

            
        )
    }
}

export default Home;