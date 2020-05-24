import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import {SectionTitle, Container} from './style';
import MusicCarousel from '../../components/MusicCarousel';
import musics from '../../musics';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <section>
                <SectionTitle>Favourites</SectionTitle>
                    <MusicCarousel  musics = {musics.favourites}/>
                </section>
                
                <section>
                    <SectionTitle>Recently Played</SectionTitle>
                    <MusicCarousel  musics = {musics.recent}/>
                </section>
                
                <section>
                    <SectionTitle>Popular Hits</SectionTitle>
                    <MusicCarousel musics = {musics.popular}/>
                </section>
                <BottomNavigation/>
            </Container>

            
        )
    }
}

export default Home;