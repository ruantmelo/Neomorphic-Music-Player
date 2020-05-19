import styled from 'styled-components';
import React from 'react';
import StyledContainer from '../../components/Container/style';

export const SectionTitle = styled.h2`
    color: ${({theme}) => theme.surface};
    font-size: 24px;
    margin: 10px 0;
`

const Square = styled.div`
    width: 120px;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => '2px 2px 3px 1px ' + theme.primary.dark + ' , -3px -1px 5px 1px ' + theme.primary.light};
`
const Img = styled.img`
    width: 100%;
`
const MusicName = styled.span`
    display: block;
    color: ${({theme}) => theme.alternative.main};
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    white-space: nowrap;
`
const MusicArtist = styled.span`
    display: block;
    white-space: nowrap;
    color: ${({theme}) => theme.surface};
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Container = styled(StyledContainer)`
    margin: 5px 5px ;
    width: 14ch;
    font-size: 16px;
`

export const MusicSquare = ({music, key}) => {
    const img = require(`../../img/${music.imgSrc}`)
    return(
    <Container >
        <Square>
            <Img src = {img}/>
        </Square>
        <MusicName>{music.name}</MusicName>
        <MusicArtist>{music.artist}</MusicArtist>
    </Container >  
        
    
    )
}
    
