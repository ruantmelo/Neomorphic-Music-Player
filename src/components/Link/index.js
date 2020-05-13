import React from 'react';
import { StyledLink } from './style';

const Link = (props) => {
    return (
        <StyledLink  {...props} >{props.children} </StyledLink>
    )
}

export default Link;