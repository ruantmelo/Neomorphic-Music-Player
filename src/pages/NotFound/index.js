import React, { useContext } from 'react';
import NotFoundSvg from '../../img/undraw_not_found_60pq.svg';

import { ErrorCode, ErrorDescription, Img } from './style';
import Container from '../../components/Container';
import { ThemeContext } from '../../styles/themes';

const NotFound = props => {

    return (
        <Container >
            <Img src={NotFoundSvg} />
            <ErrorCode >404</ErrorCode>
            <ErrorDescription >Página não encontrada</ErrorDescription>

        </Container>
    )

}





export default NotFound;