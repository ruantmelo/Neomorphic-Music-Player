import React, { useContext } from 'react';
import HappyMusic from '../../img/undraw_happy_music_g6wc.svg';
import StyledContainer from '../../components/Container/style';
// import { ThemeContext } from '../../styles/themes';
import { InputPassword, InputText } from '../../components/Input/index.js';
import { Link, Form, Title, Span,  Button, Img } from './style';
import StyledLink from '../../components/Link/style';



const Login = props => {

    return (
        <StyledContainer padding = '0 5px'>
            <Title >React Music</Title>
            <Img src = {HappyMusic} alt = 'dale' />
            <Form>
                <InputText label='Username' id='login-username' />
                <InputPassword label='Password' id='login-password' />
                <Button fontSize='18px' margin='15px auto 10px auto' width='100px' alternative={true}>Login</Button>
                <Link 
                 to='/changepassword'>
                     I've forgotten my password
                </Link>
            </Form>

            <Span>Don't have an account? Sign up <StyledLink to='/register'>here</StyledLink></Span>

        </StyledContainer>
    )

}

export default Login;