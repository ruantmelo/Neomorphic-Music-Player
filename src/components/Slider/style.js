import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import React from 'react';

export const Container = styled.div`
  width: 100%;
`

export const StyledSlider = styled(props => (
    <Slider {...props} classes = {{track: 'music-track', thumb: 'music-thumb', rail: 'music-rail' }} />
))`
    width: 100%;
    & .music-track{
        background: ${({theme}) => theme.alternative.main};
        height: 4px;
        opacity: 1;
    }

    & .music-thumb{
        background: ${({theme}) => theme.alternative.main};
        height: 15px;
        width: 15px;
        margin-left: -7.5px;
        margin-top: -6px;
    }

    & .music-rail{
        background: ${({theme}) => theme.alternative.main};
        height: 4px;
    }

`

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({theme}) => theme.surface};
`



export const TimeLabel = styled.span`
  font-size: 14px;
` 
