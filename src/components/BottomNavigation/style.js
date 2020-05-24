import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

import StyledContainer from '../Container/style';
import StyledButton from '../Button/style.js';
// import Album from '../../img/album-matheus-kauan.jpg'

// import PauseIcon from '@material-ui/icons/Pause';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


export const Container = styled(StyledContainer)`
  width: 100%;
  overflow: hidden;
  height: 15%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${({theme}) => theme.primary.main};
  box-shadow: 4px 5px 10px 5px ${({theme}) => theme.primary.light} ;
`



const ContainerBtnNav = styled(StyledContainer)`

`

const ButtonName = styled.span`
  color: ${({theme}) => theme.surface};
  text-align: center;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
`



const ButtonNav = styled(StyledButton)`
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 26px;
    padding: 10px 20px;
    color: inherit;
    & *{
      display: block;
      font-size: 32px;
    }
`


export const NavMenu = props => (
    <ContainerMenu >
      <ContainerBtnNav>
      <StyledNavLink to='/'>
        <ButtonNav >
        <HomeOutlinedIcon fontSize='inherit' />
        </ButtonNav>
      </StyledNavLink>
        <ButtonName>Home</ButtonName>
      </ContainerBtnNav>
      
      <ContainerBtnNav>
      <StyledNavLink to='/search'>
        <ButtonNav >
        <SearchIcon fontSize='inherit' />
        </ButtonNav>
        </StyledNavLink>
        <ButtonName>Search</ButtonName>
      </ContainerBtnNav>
      
      <ContainerBtnNav>
      <StyledNavLink to='/library'>
         <ButtonNav>
        <LibraryMusicOutlinedIcon fontSize='inherit' />
        </ButtonNav>
        </StyledNavLink>
        <ButtonName>Library</ButtonName>
      </ContainerBtnNav>
     
      {/* <ContainerBtnNav>
        <ButtonNav >
        <StyledNavLink to='/c'><SettingsOutlinedIcon fontSize='inherit' /></StyledNavLink>
        </ButtonNav>
        <ButtonName>Settings</ButtonName>
      </ContainerBtnNav> */}
      

    </ContainerMenu>
)


export const ContainerMenu = styled(StyledContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 5px 25px;
  padding: 0;
`


const FloatingButton = styled(StyledButton)`
  border-radius: 50%;
  font-size: 28px;
  line-height: 45px;
  padding: 5px;

  & *{
    display: block;
  }
`


const activeClassName = 'nav-item-active'

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: ${ ({ theme }) => theme.surface};
 
  
  &.${ activeClassName} {
  color: ${ ({ theme }) => theme.alternative.main};
}
`

// const ContainerBarMusic = styled(StyledContainer)`
//   box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px' + theme.primary.dark + ', inset -3px -3px 5px -1px ' + theme.primary.light};
//   padding: 4px 8px;
//   border-radius: 5px;
//   display: flex;
//   box-sizing: border-box;
//   align-items: center;
//   justify-content: space-between;
//   margin: 5px 25px;
// `


// const Img = styled.img`
//   width: 50px;
//   border-radius: 4px;
// `

// const MusicName = styled.h3`
//   color: ${({ theme }) => theme.surface};
//   width: 20ch;
//   display: block;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `
// const MusicAuthor = styled.span`
//   color: ${({ theme }) => theme.surface};
//   font-size: 12px;
//   width: 20ch;
// `
// const ContainerMusicInfo = styled(StyledContainer)`
//   display: inline-block;
// `

// export const BarMusic = (props) => {
//   return (
//     <ContainerBarMusic>
//       <Img src={Album} alt='imagem da musica' />

//       <ContainerMusicInfo display='inline-block'>
//         <MusicName>Quarta Cadeira (feat. Jorge e Mateus)</MusicName>
//         <MusicAuthor>Matheus e Kauan</MusicAuthor>
//       </ContainerMusicInfo>

//       <FloatingButton alternative>
//         <PauseIcon fontSize='inherit' />
//       </FloatingButton>

//     </ContainerBarMusic>
//   )

// }







