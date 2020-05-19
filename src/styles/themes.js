import { createContext } from 'react'

export const themes = {
    light: {
        name: 'light',
        surface: '#808080',
        alternative: { main: '#e34c32', light: '#f03e1f' },

        primary: {
            main: '#f0f0f0',
            light: '#fafafa',
            dark: '#c4c4c4',
        },
        secondary: '#201f25'
    },
    dark: {
        name: 'dark',
        surface: '#ebebeb',
        alternative: { main: '#e34c32', light: '#f03e1f' },

        primary: {
            main: '#201f25',
            light: '#2a2930',
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