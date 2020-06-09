import styled from 'styled-components';
import StyledContainer from '../../components/Container/style';

export const Container = styled(StyledContainer)`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    display: block;
`

export const ErrorCode = styled.h1`
    margin: 10px auto 0 auto;
    color: ${props => props.theme.surface};
    font-size: ${props => props.fontSize ? props.fontSize : '64px'};
    text-align: center;
`

export const ErrorDescription = styled.span`
    color: ${({ background, theme: { alternative } }) => alternative ? alternative.main : (background ? background : 'none')};
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    display: block;
    text-align: center;
`