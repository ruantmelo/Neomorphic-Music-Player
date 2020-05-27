import styled from 'styled-components';
// eslint-disable-next-line
import React from 'react';
import StyledContainer from '../../components/Container/style'
import StyledButton from '../../components/Button/style';

import { NavLink } from 'react-router-dom';

import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export const Container = styled(StyledContainer)`
    height: 100%;
    width: 100%;
`

const ContainerTopBar = styled.div`
    
`

const FloatingIconButton = styled(StyledButton)`
  border-radius: 50%;
  font-size: 16px;
  margin: 0;
  text-decoration: none;
  display: inline-block;
  & *{
      display: block;
  }
`

export const TopBar = props => (
    <ContainerTopBar>
        <NavLink to = '/'>
        <FloatingIconButton><ArrowBackIosOutlinedIcon  fontSize = 'inherit'/></FloatingIconButton>
        </NavLink>
    </ContainerTopBar>
)

const Img = styled.img`
    border-radius: 50%;
`
const ContainerImg = styled(StyledContainer)`
    width: fit-content;
    display: flex;
    align-items: center;
    margin: 20px auto 15px  auto;
    overflow: visible;
    border-radius: 50%;
    padding: 5px;
    box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -2px -2px 8px 4px ' + theme.primary.light};
`

export const MusicImg = props => {
    const musicSrc = require(`../../img/${props.src}`)
    return (
    <ContainerImg>
        <Img src = {musicSrc} />
    </ContainerImg>
)}


const ContainerSortBar = styled(StyledContainer)`
    display: flex;
    justify-content: space-between;
`

export const SortBar = props => {
    
    return(
        <ContainerSortBar>
            <FloatingIconButton
                alternative
            ><ShuffleIcon fontSize = 'inherit'/></FloatingIconButton>
            <FloatingIconButton><RepeatOutlinedIcon fontSize = 'inherit'/></FloatingIconButton>
        </ContainerSortBar>
    )
}

const ContainerMusicInfo = styled.div`
    margin: 25px 0px 15px;
`

const MusicName = styled.span`
    color: ${({theme}) => theme.surface};
    text-overflow: ellipsis;
    display: block;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    font-size: 26px;
`

const MusicArtist = styled.span`
    color: ${({theme}) => theme.surface};
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
`

export const MusicInfo = ({name, artist}) => (
    <ContainerMusicInfo>
        <MusicName>{name}</MusicName>
        <MusicArtist>{artist}</MusicArtist>
    </ContainerMusicInfo>

)

const ContainerPlayerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 35px;

    & button{
        font-size: 32px;
    }

    & button .MuiSvgIcon-fontSizeLarge{
        font-size: 56px;
    }
`

export const PlayerButtons = ({paused, toggle, next, prev}) => (


    <ContainerPlayerButtons>
        <FloatingIconButton onClick = {prev} alternative ><SkipPreviousIcon fontSize = 'inherit' /></FloatingIconButton>
        <FloatingIconButton onClick = {toggle} alternative > {paused? <PlayArrowIcon fontSize = 'large' />: <PauseIcon fontSize = 'large'/>  } </FloatingIconButton>
        <FloatingIconButton onClick = {next} alternative ><SkipNextIcon fontSize = 'inherit' /></FloatingIconButton>
    </ContainerPlayerButtons>
    
)










