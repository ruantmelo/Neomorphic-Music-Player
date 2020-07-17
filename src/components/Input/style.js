
import { themes } from '../../styles/themes';
import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';


export const StyledHTMLInput = styled.input`
    border: none;
    font-size: 14px;
    outline: none;
    border-radius: 10px;
    caret-color: ${({ theme }) => theme.alternative.main} ;
    color: ${({ theme }) => theme.surface};
    background: ${({ theme }) => theme.primary.main};
    box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px' + theme.primary.dark + ', inset -3px -3px 5px -1px ' + theme.primary.light};

    &::placeholder{
        color: ${({ theme }) => theme.surface};
        opacity: ${({theme}) => theme.name === 'dark'? '0.2' : '0.5'};
    }
`

export const StyledInput = styled((props) => {
    return (<TextField  {...props} />)
})`
    width: 100%;
    padding: 5px 5px 5px 15px;
    font-family: inherit;
    background: ${({ theme }) => theme.primary.main};
    border: none;
    margin-bottom: 15px;
    box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px' + theme.primary.dark + ', inset -3px -3px 5px -1px ' + theme.primary.light};
    border-radius: 15px;

    & .MuiInputLabel-formControl{
        
    }

    & .MuiInput-underline:hover::before, & .MuiInput-underline:hover::after {
        border-bottom: none;
    }

    & .MuiFormLabel-root{
        color: ${({ theme }) => theme.surface};
    }
    
    & label.Mui-focused{
        color: ${({ theme }) => theme.surface};
    }

    & .MuiInputBase-root{
        color: ${({ theme }) => theme.alternative.main};
        border-radius: 15px;
    }

    & .MuiInputBase-root::before {
        border: none;
    }

    & .MuiInput-underline::after{
        border: none;
    }
    & .MuiFilledInput-underline::after{
        border: none;
    }
    & .MuiIconButton-root{
        color: ${({ theme }) => theme.surface};
    }
`


export const inputStyles = {
    light: {
        root: {
            color: 'white',
            width: '100%',
            fontFamily: 'inherit',
            background: themes.light.primary.main,
            border: 'none',
            marginBottom: '15px',
            boxShadow: `inset 4px 4px 6px -1px  ${themes.light.primary.dark} , inset -3px -3px 5px -1px ${themes.light.primary.light} `,
            borderRadius: '15px',
            '& .MuiFormLabel-root': {
                color: themes.light.surface,
            },
            '& label.Mui-focused': {
                color: themes.light.surface,
            },

            '& .MuiInputBase-root': {
                color: themes.light.alternative.main,
                borderBottom: 'none',
                borderRadius: '15px',
            },
            '& .MuiInputBase-root::before': {
                border: 'none',
            },
            '& .MuiFilledInput-underline::after': {
                border: 'none',
            },
            '& .MuiIconButton-root': {
                color: themes.light.surface,
            }
        },

    },
    dark: {
        root: {
            background: themes.dark.primary.main,
            border: 'none',
            width: '100%',
            fontFamily: 'inherit',
            marginBottom: '15px',
            boxShadow: `inset 4px 4px 6px -1px  ${themes.dark.primary.dark} , inset -3px -3px 5px -1px ${themes.dark.primary.light} `,
            borderRadius: '15px',
            '& .MuiFormLabel-root': {
                color: themes.dark.surface,
            },
            '& label.Mui-focused': {
                color: themes.dark.surface,
            },

            '& .MuiInputBase-root': {
                color: themes.dark.alternative.main,
                borderBottom: 'none',
                borderRadius: '15px',
            },
            '& .MuiInputBase-root::before': {
                border: 'none',
            },
            '& .MuiFilledInput-underline::after': {
                border: 'none',
            },
            '& .MuiIconButton-root': {
                color: themes.dark.surface,
            }
        }

    }
}