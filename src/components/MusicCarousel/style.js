import styled from 'styled-components';
import React from 'react';
import StyledContainer from '../Container/style';
import { NavLink } from 'react-router-dom';


const Square = styled.div`
    width: 100px;
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
const MusicArtist = styled.span`
    display: block;
    width: min-content;
    max-width: 100%;
    white-space: nowrap;
    color: ${({theme}) => theme.surface};
    font-size: 14px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
`

const Container = styled(NavLink)`
    margin: 5px 5px ;
    display: block;
    width: 14ch;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
`

export const MusicSquare = ({music}) => {
    const img = require(`../../img/${music.imgSrc}`)
    return(
    <Container  to = {`/player/${music.id}`} >
        <Square >
            <Img src = {img}/>
        </Square>
        <MusicName >{music.name}</MusicName>
        <MusicArtist >{music.artist}</MusicArtist>
    </Container >  
        
    
    )
}
    