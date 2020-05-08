import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../styles/themes'

const StyledButton = styled.button`
    padding: ${props => props.padding || '10px'};
    background: ${props => props.theme.primary.main};
    border: none;
    display: block;
    margin: auto auto;
    cursor: pointer;
    color: ${props => props.theme.surface};
    line-height: 50px;
    border-radius: 15px;
    margin-top: 10px;
    outline: none;
    box-shadow: ${props => '4px 4px 10px -1px' + props.theme.primary.dark + ', -3px -3px 15px -1px' + props.theme.primary.light};

    &: hover{
        box-shadow: ${props => 'inset 4px 4px 6px - 1px' + props.theme.primary.dark + ', inset - 3px - 3px 5px - 1px' + props.theme.primary.light}
    }
`

export const Button = props => {
    const themeContext = useContext(ThemeContext);
    console.log(themeContext)
    return (
        <StyledButton theme={themeContext.theme} >Teste</StyledButton>

    )
}