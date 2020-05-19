import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import StyledContainer from '../Container/style';
import  StyledButton from '../Button/style.js';
import Album from '../../img/album-matheus-kauan.jpg'
import PauseIcon from '@material-ui/icons/Pause';

export const Button = styled(StyledButton)`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 36px;
    flex: 1;
    margin: 2px 15px;
`

const FloatingButton = styled(StyledButton)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  flex: 0 1 auto;
  padding: 5px;
`


const activeClassName = 'nav-item-active'

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
color: ${ ({ theme }) => theme.surface};
  
  &.${ activeClassName} {
  color: ${ ({ theme }) => theme.alternative.main};
}
`

const Container = styled(StyledContainer)`
  box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px' + theme.primary.dark + ', inset -3px -3px 5px -1px ' + theme.primary.light};
  padding: 8px;
  margin: 5px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const Img = styled.img`
  width: 40px;
  border-radius: 4px;
`

const MusicName = styled.h3`
  color: ${({ theme }) => theme.surface};
  width: 9rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MusicAuthor = styled.span`
  color: ${({ theme }) => theme.surface};
  font-size: 12px;
  width: 9rem;
`

export const BarMusic = (props) => {
  return (
    <Container>
      <Img src={Album} alt='imagem da musica' />

      <StyledContainer display='inline-block'>
        <MusicName>Quarta Cadeira (feat. Jorge e Mateus)</MusicName>
        <MusicAuthor>Matheus e Kauan</MusicAuthor>
      </StyledContainer>

      <FloatingButton alternative>
        <PauseIcon fontSize='inherit' />
      </FloatingButton>

    </Container>
  )

}







