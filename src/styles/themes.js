import { createContext } from 'react'

export const themes = {
    light: {
        surface: '#808080',
        alternative: '#c1442e',

        primary: {
            main: '#f0f0f0',
            light: '#fff',
            dark: '#d1d1d1',
        },
        secondary: '#201f25'
    },
    dark: {
        surface: 'white',
        alternative: '#c1442e',

        primary: {
            main: '#201f25',
            light: '#3c3b42',
            dark: '#0f0f12',
        },
        secondary: '#f0f0f0'
    },
};

export const ThemeContext = createContext(
    {
        theme: themes.dark,
        toggleTheme: () => { },
    }
);