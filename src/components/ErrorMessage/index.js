import React from 'react';
import {Container, Info, ErrorStatus, ErrorDescription, ErrorAction} from './style.js'



const ErrorMessage = ({error, action}) => {
    return(
        <Container>
            <Info>
                <ErrorStatus>{error.status}</ErrorStatus>
                <ErrorDescription>{error.message}</ErrorDescription>
                <ErrorAction as = 'a' href= '/login'>Login again</ErrorAction>
            </Info>
        </Container>
       
    )
}

export default ErrorMessage