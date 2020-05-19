import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import {SectionTitle} from './style';
import {MusicSquare} from './style';
import musics from '../../musics';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <section>
            <SectionTitle>Favourites</SectionTitle>
            {musics.map((music, index) => <MusicSquare music = {music} key = {index}/>)}
            </section>
            
            <section>
                <SectionTitle>Recently Played</SectionTitle>
            </section>
            
            <section>
                <SectionTitle>Popular Hits</SectionTitle>
            </section>
           
            </>
        )
    }
}

export default Home;