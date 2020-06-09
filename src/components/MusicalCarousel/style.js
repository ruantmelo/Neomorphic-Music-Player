import styled from 'styled-components';
import React from 'react';

const Square = styled.div`
    width: 100px;
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => '2px 2px 3px 1px ' + theme.primary.dark + ' , -3px -1px 5px 1px ' + theme.primary.light};
`

const Img = styled.img`
    width: 100%;
`
const Name = styled.span`
    display: block;
    width: min-content;
    max-width: 100%;
    color: ${({theme}) => theme.alternative.main};
    font-size: 16px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    margin: 5px 0;
    white-space: nowrap;
`
const Info = styled.span`
    display: block;
    width: min-content;
    max-width: 100%;
    text-transform: capitalize;
    white-space: nowrap;
    color: ${({theme}) => theme.surface};
    font-size: 14px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
`

const Container = styled.a`
    margin: 5px 5px ;
    display: block;
    width: 14ch;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
`

export const MusicalSquare = ({type, data, queryParams}) => {
    //name, id, 

    // console.log(music.artists)
    let params = '?';
    let info = '';
    switch(type){
        case 'artist':{
            params += queryParams.context?  `context=${queryParams.context}` : `context=${data.spotify_uri}`
            params += `&id=${data.id}`
            info = data.genres.join(' ,')
            break;
        }

        case 'music': {
            params += queryParams.context?  `context=${queryParams.context}` : `context=${data.spotify_uri}`
            params += `&id=${data.id}`
            //PASSAR A POSITION OU URI
            info = data.artists.map(artist => artist.name).join(', ')
            break;
        }

        case 'playlist': {
            if (queryParams){
                params += queryParams.context?  `context=${queryParams.context}` : `context=${data.spotify_uri}`
                params += `&id=${data.id}`
                info = data.owner.display_name
            }
            break;
        }
    }
    // const artists = data.artists.map(artist => artist.name).join(', ')

    // let params = '?'

    // if (queryParams.context){
    //     params += `context=${queryParams.context}`
    // }  
        
        
    // params += `&id=${music.id}`
    // params += `&position=${music.track_number}`

    
    /* href = {`/player/${params}`} */
    return(
    <Container href = {`/player${params}`}> 
        <Square>
            <Img src = {data.img} />
        </Square>
        <Name>{data.name}</Name>
        <Info>{info}</Info>
    </Container >  
        
    
    )
}

const TextNh = styled.span`
    color: ${({theme}) => theme.surface};
    font-size: 16px;
`;

const ContainerNh = styled.div`
    width: 100%;
    text-align: center;
`

export const NothingHere = () => (
    <ContainerNh>
        <TextNh>Nothing Here :(</TextNh>
    </ContainerNh>
)