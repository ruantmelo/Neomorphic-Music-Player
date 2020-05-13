import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import React from 'react';


//Muito trabalho para algo que nao seja tão necessário.

const StyledTypography = styled(({ children, ...rest }) => (
    <Typography
        classes={{
            h1: 'typography-h1',
            h2: 'typography-h2',
            h3: 'typography-h3',
            h4: 'typography-h4',
            h5: 'typography-h5',
            h6: 'typography-h6',
            subtitle1: 'typography-subtitle1',
            subtitle2: 'typography-subtitle2',
            body1: 'typography-body1',
            body2: 'typography-body2',
            caption: 'typography-caption',
            button: 'typography-button',
            overline: 'typography-overline',
            srOnly: 'typography-srOnly',
            inherit: 'typography-inherit',

        }}
        {...rest} > {children}</Typography>
))`
    &.typography-h1{

    }

`

export default StyledTypography;

// { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p',}

// 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'subtitle1'
// | 'subtitle2'
// | 'body1'
// | 'body2'
// | 'caption'
// | 'button'
// | 'overline'
// | 'srOnly'
// | 'inherit'