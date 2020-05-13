import React from 'react';
import ThemeSwitch from '../ThemeSwitch/index';
import StyledHeader from './style';


const Header = ({ themeName, toggleTheme }) => {

    return (
        <StyledHeader>
            <ThemeSwitch themeName={themeName} toggleTheme={toggleTheme} />
        </StyledHeader>
    )
}
export default Header;




