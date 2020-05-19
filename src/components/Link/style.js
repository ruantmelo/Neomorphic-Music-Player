import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLink = styled(props => {
    return (
        <Link {...props} />
    )
})`
    color: ${({ theme }) => theme.alternative.main};
`

export default StyledLink;