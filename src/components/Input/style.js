
import { themes } from '../../styles/themes';


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