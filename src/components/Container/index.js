import React from 'react';
import { ThemeContext } from '../../styles/themes';
import StyledContainer from './style';


const Container = props => {
    const { theme } = ThemeContext;

    return (
        <StyledContainer theme={theme} {...props}>{props.children}</StyledContainer>
    )
}

export default Container;