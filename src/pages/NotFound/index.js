import React from 'react';
import { Container } from './style';
import ErrorMessage from '../../components/ErrorMessage';



const NotFound = props => {

    return (
        <Container >
            {/* <Img src={NotFoundSvg} /> */}
            <ErrorMessage error = {{status: 404 , message: 'Page not found' }}/>
        </Container>
    )

}





export default NotFound;