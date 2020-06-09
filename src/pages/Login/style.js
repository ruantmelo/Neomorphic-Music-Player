import styled from 'styled-components';
import StyledButton from '../../components/Button/style';
import StyledLink from '../../components/Link/style';
import StyledContainer from '../../components/Container/style';

export const Container = styled(StyledContainer)`
    margin: auto auto;
    position: relative;
    height: 100%;
`

export const Link = styled(StyledLink)`
    display: block;
    width: max-content;
    margin: 20px auto 10px auto;
    text-align: center;
`

export const Button = styled(StyledButton)`
    padding: 10px;
    width: 150px;
    margin: 10px auto;
`

export const Img = styled.img`
    width: 100%;
    display: block;
`

export const SpanSignUp = styled.span`
    color: ${props => props.theme.surface};
    display: block;
    text-align: center;
    margin: 35px auto 0px auto;
`

export const Title = styled.h1`
    text-align: center;
    color: #e34c32;
    font-size: 32px;
    margin-bottom: 30px;
    font-family: inherit;
`
export const LoginButton = styled(StyledButton)`
    color: ${({theme}) => theme.alternative.main};
    margin: 25px auto;
    width: 250px;
` 

// color: ${({ theme, color }) => theme ? theme : (color? color: 'blue')};
// font-size: ${({ fontSize }) => fontSize ? fontSize : '20px'};

// const Img = styled.img`
//     width: 100%;
//     display: block;
// `

export const Form = styled.form`
    display: block;
    width: 100%;
    margin: 20px 0 0 0;
`

export const MadeBy = styled.span`
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    color: ${({theme}) => theme.surface};
`

export const GitHubLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.surface};
`

// export default Img;