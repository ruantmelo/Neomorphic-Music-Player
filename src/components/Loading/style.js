import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContainerLCircle = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingCircle = styled(props => (
    <ContainerLCircle>
        <CircularProgress {...props} classes = {{root: 'circular-progress'}}/>
    </ContainerLCircle>
    
    ))`
    &.circular-progress{
        color: ${({theme}) => theme.alternative.main};
    }
    
`
