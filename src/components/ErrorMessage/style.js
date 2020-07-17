import styled from 'styled-components';
import StyledButton from '../Button/style';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Info = styled.div`
`

export const ErrorStatus = styled.h3`
    display: block;
    max-width: 250px;
    overflow-wrap: break-word;
    margin: 10px auto 0 auto;
    color: ${props => props.theme.surface};
    font-size: 64px;
    line-height: calc(64px * 1.5);
    text-align: center;
`

export const ErrorDescription = styled.span`
    color: ${({ background, theme: { alternative } }) => alternative ? alternative.main : (background ? background : 'none')};
    font-size: 14px;
    display: block;
    text-align: center;
`

export const ErrorAction = styled(StyledButton)`
    display: block;
    width: fit-content;
    margin: 25px auto 10px auto;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.surface};
`