import React from 'react';
import { StyledSwitch, iconsSun, iconsMoon , Container} from './style'



const ThemeSwitch = props => {

    const IconSun = iconsSun[props.themeName];
    const IconMoon = iconsMoon[props.themeName];

    return (

        <Container>
            <IconSun />
            <StyledSwitch checked={props.themeName === 'dark'} onChange={props.toggleTheme} />
            <IconMoon />
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