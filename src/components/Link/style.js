import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

export const StyledLink = styled(props => {
    return (
        <Link {...props} />
    )
})`
    color: ${({ theme }) => theme.alternative.main};
`