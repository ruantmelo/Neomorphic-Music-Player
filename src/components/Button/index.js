import React, { useContext } from 'react';
import StyledButton from './style';
import { ThemeContext } from '../../styles/themes';



export const Button = props => {
    const themeContext = useContext(ThemeContext);
    return (
        <StyledButton theme={themeContext.theme} >Teste</StyledButton>

    )
};

export default Button;