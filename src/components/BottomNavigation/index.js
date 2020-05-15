import React from 'react';

import Container from '../Container';

import { StyledNavLink, Button, BarMusic } from './style';


import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';



const BottomNavigation = props => {
    return (
        <Container height='20%' position='absolute' left='0' width='100%' bottom='0'>
            <BarMusic />

            <Container position='relative' display='flex' >

                <Button >
                    <StyledNavLink to='/'><HomeOutlinedIcon fontSize='inherit' /></StyledNavLink>
                </Button>
                <Button >
                    <StyledNavLink to='/a'><SearchIcon fontSize='inherit' /></StyledNavLink>
                </Button>

                <Button >
                    <StyledNavLink to='/b'><LibraryMusicOutlinedIcon fontSize='inherit' /></StyledNavLink>
                </Button>

                <Button >
                    <StyledNavLink to='/c'><SettingsOutlinedIcon fontSize='inherit' /></StyledNavLink>
                </Button>

            </Container>
        </Container>
    )
}

export default BottomNavigation;