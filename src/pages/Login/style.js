import styled from 'styled-components';
import StyledButton from '../../components/Button/style';
import StyledLink from '../../components/Link/style';


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

export const Span = styled.span`
    color: ${props => props.theme.surface};
    display: block;
    text-align: center;
    margin: 35px auto 0px auto;
`

export const Title = styled.h1`
    text-align: center;
    color: #e34c32;
    font-size: 28px;
    margin-bottom: 20px;
    font-family: inherit;
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

// export default Img;