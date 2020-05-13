import React from 'react';
import StyledButton from './style';




export const Button = ({ children, ...rest }) => {
    return (
        <StyledButton {...rest} >{children}</StyledButton>

    )
};

export default Button;