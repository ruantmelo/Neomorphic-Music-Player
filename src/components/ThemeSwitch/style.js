import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { themes } from '../../styles/themes';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';

import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness5Icon from '@material-ui/icons/Brightness7';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import Brightness2Icon from '@material-ui/icons/Brightness3';



export const iconsSun = {
    light: styled(Brightness5Icon)`
    &{
            color:  ${({ theme }) => theme.surface};
        }
`,

    dark: styled(Brightness5OutlinedIcon)`
    &{
        color:  ${({ theme }) => theme.primary.light};
    }
`
}



export const iconsMoon = {
    dark: styled(Brightness2Icon)`
    &{
            color:  ${({ theme }) => theme.surface};
        }
`,

    light: styled(Brightness2OutlinedIcon)`
    &{
        color:  ${({ theme }) => theme.primary.main};
    }
`
}


// export const IconSun = styled((props) => {
//     console.log('dale2')

//     if (props.themeName === 'light') {
//         return styled(Brightness2OutlinedIcon)`
//             &{
//                 color:  ${({ theme }) => theme.primary.main};
//             }
//         `

//     }

//     return styled(Brightness2Icon)`
//         &{
//                 color:  ${({ theme }) => theme.surface};
//             }
//     `

// })



export const IconMoon = styled((props) => {
    console.log('dale')
    if (props.themeName === 'light') {
        return styled(Brightness2OutlinedIcon)`
            &{
                color:  ${({ theme }) => theme.primary.main};
            }
        `

    }

    return styled(Brightness2Icon)`
        &{
                color:  ${({ theme }) => theme.surface};
            }
    `

})



export const StyledSwitch = styled((props) => (

    <Switch {...props} classes={{ checked: 'checked', thumb: 'thumb', track: 'track' }} />
))`
    background: ${({ theme }) => theme.primary.dark};
    
    
    & .track {
        background-color: gray; 
    }

    & .thumb{
        background-color: white;
    }

    & .checked + .track{
        background-color: ${({ theme }) => theme.alternative.main};
    }

    & .checked .thumb{
        background-color: ${({ theme }) => theme.alternative.main};
    }
`


export const switchStyles = makeStyles({
    root: {

    },

    switchBase: {
        color: 'white',
        '&$checked': {
            color: themes.dark.alternative.light,
            '& + $track': {
                opacity: 1,
                backgroundColor: themes.dark.alternative.main,
            },
        }
    },

    checked: {

    },
    track: {
        opacity: 0.2,
        backgroundColor: 'black',
    },
});


export const iconsStyles = {
    light: {
        sun: {
            root: {
                color: themes.light.surface
            }
        }
        ,
        moon: {
            root: {
                color: themes.light.primary.main
            }
        }
    },

    dark: {
        sun: {
            root: {
                color: themes.dark.primary.main
            }
        }
        ,
        moon: {
            root: {
                color: themes.dark.surface
            }
        }
    },

}




