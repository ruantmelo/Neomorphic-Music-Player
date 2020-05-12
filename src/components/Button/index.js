import React, { useContext } from 'react';
import StyledButton from './style';
import { ThemeContext } from '../../styles/themes';



export const Button = props => {
    const themeContext = useContext(ThemeContext);
    return (
        <StyledButton {...props} theme={themeContext.theme} >{props.children}</StyledButton>

    )
};

export default Button;