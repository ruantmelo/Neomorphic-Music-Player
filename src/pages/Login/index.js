import React from 'react';
import HappyMusic from '../../img/undraw_happy_music_g6wc.svg';

// import { ThemeContext } from '../../styles/themes';
import { InputPassword, InputText } from '../../components/Input/index.js';
import {Container, Link, Form, Title, SpanSignUp, MadeBy,GitHubLink , LoginButton, Img } from './style';
import StyledLink from '../../components/Link/style';
import SpotifyService from '../../utils/SpotifyService';


const refreshToken = async () => {
    const rt =  localStorage.getItem('@reactify-rm/spotify-refresh_token');

    if (rt){
        await SpotifyService.refreshToken();
        window.location.href = "/" ;

    } else{
        window.location.href = "http://localhost:8888/login";
    }

}


const Login  = props => { 
    
    return (
        <Container padding = '0 5px'>
            <Title >Reactify</Title>
            <Img src = {HappyMusic} alt = 'Imagem de animal fofo escutando música' />
            <LoginButton  onClick = {refreshToken} >Login</LoginButton>
            {/* <Form>
                <InputText label='Username' id='login-username' />
                <InputPassword label='Password' id='login-password' />
                <Button as = 'a' href = {'http://localhost:8888/'} fontSize='18px' margin='15px auto 10px auto' width='100px' alternative={true}>Login</Button>
                <Link 
                 to='/changepassword'>
                     I've forgotten my password
                </Link>
            </Form> */}

            {/* <SpanSignup>Don't have an account? Sign up <StyledLink to='/register'>here</StyledLink></SpanSignup> */}
            <MadeBy>Made with <strong>&hearts;</strong> by <strong><GitHubLink href = 'https://github.com/ruan-melo'>@Ruan Melo</GitHubLink></strong> </MadeBy>
        </Container>
    )
}

export default Login;