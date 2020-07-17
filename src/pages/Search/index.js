import React, { useState } from 'react';
import {PageContainer, Container, ContainerInput, WaitingSearch, ContainerResults, SearchSection, Input} from './style';
import MusicalCarousel from '../../components/MusicalCarousel';
import {LoadingCircle} from '../../components/Loading/style';
import BottomNavigation from '../../components/BottomNavigation';
import ErrorMessage from '../../components/ErrorMessage';
import SpotifyService from '../../utils/SpotifyService';
import { useEffect } from 'react';

const Search = props => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('')
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loadingData, setlData] = useState(false);

    const handleInput = (e) => {
        setlData(true);
        setText(e.target.value)
    }

    useEffect(() => {
        async function loadData(){
            try {
                const dt = await SpotifyService.search(text)
                setData(dt);
            } catch (err) {
                setError(err)
            }
            setlData(false);
        }

        if (!(text.replace(/\s+/, '').length === 0)){
            loadData()
            
        }
    }, [text])

    console.log('data 3', data )
    return (
        <PageContainer>
            {loading? <LoadingCircle/> : (error? <ErrorMessage error = {error}/>:
            
            <Container>
                <ContainerInput>
                    <Input onChange = {handleInput} placeholder = {'What do you want to search?'}/>
                </ContainerInput>
                {!text.length || loadingData? <WaitingSearch/> : (
                <ContainerResults>
                    <SearchSection title = {'Albums'}>
                        <MusicalCarousel type = 'album'  data = {data.albums}  />
                    </SearchSection>

                    <SearchSection title = {'Artists'}>
                        <MusicalCarousel type = 'artist'  data = {data.artists}  />
                    </SearchSection>
                    
                    <SearchSection title = {'Musics'}>
                        <MusicalCarousel type = 'musics'  data = {data.musics}  />
                    </SearchSection>

                    <SearchSection title = {'Playlist'}>
                        <MusicalCarousel type = 'playlist'  data = {data.playlists}  />
                    </SearchSection>
                </ContainerResults>
                )}
            </Container>
               
           
            )
            }
            <BottomNavigation/>
        </PageContainer>
    )

}
export default Search;