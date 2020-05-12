import React, { useContext } from 'react';
import { ThemeContext } from '../../styles/themes';
import ThemeSwitch from '../ThemeSwitch/index';
import StyledHeader from './style';


const Header = props => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledHeader theme={theme}>
            <ThemeSwitch />
        </StyledHeader>
    )
}
export default Header;




