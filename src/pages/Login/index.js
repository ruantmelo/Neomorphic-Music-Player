import React from 'react'
import Container from '../../components/Container'
import { InputPassword } from '../../components/Input/index.js'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
        }
    }


    render() {
        return (
            <Container display='flex' justifyContent='center'>

                <InputPassword />
            </Container>
        )
    }
}

export default Login;