import styled from 'styled-components';


export const Title = styled.h1`
    text-align: center;
    color: #e34c32;
    font-size: 28px;
    margin-bottom: 20px;
    font-family: inherit;
`
// color: ${({ theme, color }) => theme ? theme : (color? color: 'blue')};
// font-size: ${({ fontSize }) => fontSize ? fontSize : '20px'};

const Img = styled.img`
    width: 100%;
    display: block;
`

export const Form = styled.form`
    display: block;
    width: 100%;
    margin: 20px 0 0 0;
`

export default Img;