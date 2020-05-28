import React, {useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import styled from 'styled-components';
import TimeHelper from '../../utils/TimeHelper';
import {Container, TimeContainer , StyledSlider, TimeLabel} from './style';


function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

export const MusicSlider = ({currentTime, duration, changeTime}) => {
  
  const [active , setActive] = useState(false);
  const [value, setValue] = useState(0);
  
  return (
  <Container>
    <StyledSlider
        ValueLabelComponent={ValueLabelComponent}
        valueLabelFormat = {(value) => TimeHelper.format(TimeHelper.toCurrent(value, duration))}
        aria-label="music time bar"
        defaultValue={0}
        value = {active? value: TimeHelper.porcent(currentTime, duration)}
        
        onChange = {(e, val) => {
          if (!active) {
              setActive(true)
          }
          setValue(val);
        }}

        onChangeCommitted={(e, val) => {
          changeTime(TimeHelper.toCurrent(value, duration))
          setActive(false);
        }}
      
      />
      <TimeContainer>
        <TimeLabel>{TimeHelper.format(currentTime)}</TimeLabel>
      <TimeLabel>{TimeHelper.format(duration)}</TimeLabel>
      </TimeContainer>
  </Container>
      
)}
