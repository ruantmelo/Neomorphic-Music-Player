import { makeStyles } from '@material-ui/core/styles';
import { themes } from '../../styles/themes';


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
                color: themes.light.primary.dark
            }
        }
    },

    dark: {
        sun: {
            root: {
                color: themes.dark.primary.dark
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




