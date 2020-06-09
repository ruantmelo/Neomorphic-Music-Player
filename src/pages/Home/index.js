import React, {useState, useEffect} from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import { Container,ContainerMusics, MusicalSection} from './style';
import SpotifyService from '../../utils/SpotifyService';
import ErrorMessage from '../../components/ErrorMessage';
import {LoadingCircle} from '../../components/Loading/style';

const isEmpty = obj => {
    for (let a in obj ) return false;
    return true;
}



const Home = props =>  {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    useEffect(() => {
        async function loadData(){
            try {
                const dt =  await Promise.all(
                    [
                        SpotifyService.getSavedTracks(), 
                        SpotifyService.getUserTopArtists(),
                        SpotifyService.getFeaturedPlaylists(),
                    ])
                setData({favourites: dt[0], topArtists: dt[1], featured: dt[2]});
            } catch (error) {
                setError(error)
            }
            setLoading(false)   
        }
        if (isEmpty(data)){
            loadData();
        }
    
    }, [data])

    return(
            <Container>
                {loading? <LoadingCircle/> : (error? <ErrorMessage error = {error}/>:
                <>
                <ContainerMusics>
                    <MusicalSection type = 'music'  title = 'Favourites' data = {data.favourites} queryParams = {{context: 'favourites' }} />
                    <MusicalSection type = 'artist' title = 'Your Top Artists' data = {data.topArtists}  />
                    <MusicalSection type = 'playlist' title = {data.featured.message} data = {data.featured.playlists}/>
                </ContainerMusics>
                    
                <BottomNavigation/> 
                </>
                ) 
                }
            
            </Container>    
        )
}

export default Home;