import React, { useContext } from 'react';
import { ThemeContext } from '../../styles/themes';

import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness5Icon from '@material-ui/icons/Brightness7';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import Brightness2Icon from '@material-ui/icons/Brightness3';

import Switch from '@material-ui/core/Switch';
import { switchStyles, iconsStyles } from './styles'
import Container from '../Container/index'
import { makeStyles } from '@material-ui/core/styles';





const ThemeSwitch = props => {
    const swClasses = switchStyles();

    const themeContext = useContext(ThemeContext);
    const { theme, toggleTheme } = themeContext;

    const isClass = makeStyles(iconsStyles[theme.name].sun)()
    const imClass = makeStyles(iconsStyles[theme.name].moon)()

    return (

        <Container display='flex' alignItems='center'>
            {theme.name === 'light' ? <Brightness5Icon classes={{ root: isClass.root }} /> : <Brightness5OutlinedIcon classes={{ root: isClass.root }} />}

            <Switch checked={theme.name === 'dark'} onChange={toggleTheme} classes={{ root: swClasses.root, switchBase: swClasses.switchBase, checked: swClasses.checked, track: swClasses.track }} />

            {theme.name === 'dark' ? <Brightness2Icon classes={{ root: imClass.root }} /> : <Brightness2OutlinedIcon classes={{ root: imClass.root }} />}
        </Container>

    )
}

export default ThemeSwitch;

/* <ThemeContext.Consumer>
{({ theme, toggleTheme }) => (
    <Container>
        <Brightness7Icon classes={{ root: makeStyles(iconsStyles[theme.name].sun) }} />
        <Switch onChange={toggleTheme} classes={{ root: swClasses.root, switchBase: swClasses.switchBase, checked: swClasses.checked, track: swClasses.track }} />
        <Brightness3Icon classes={{ root: makeStyles(iconsStyles[theme.name].moon }} />
    </Container>

)
}
</ThemeContext.Consumer> */