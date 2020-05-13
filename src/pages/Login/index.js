import React, { useContext } from 'react';
import HappyMusic from '../../img/undraw_happy_music_g6wc.svg';
import Container from '../../components/Container';
// import { ThemeContext } from '../../styles/themes';
import { InputPassword, InputText } from '../../components/Input/index.js';
import Img, { Form, Title, Span } from './style';
import Button from '../../components/Button';
import Link from '../../components/Link';



const Login = props => {

    return (
        <Container>
            <Title >React Music</Title>
            <Img src={HappyMusic} alt='Imagem da Logo' />
            <Form>
                <InputText label='Username' id='login-username' />
                <InputPassword label='Password' id='login-password' />
                <Button fontSize='18px' margin='15px auto 10px auto' width='100px' alternative={true}>Login</Button>
                <Link style={{ display: 'block', textAlign: 'center', margin: '20px auto 0 auto' }} to='/changepassword'>I've forgotten my password</Link>
            </Form>

            <Span  >Don't have an account? Sign up <Link to='/register'>here</Link></Span>

        </Container>
    )

}

export default Login;