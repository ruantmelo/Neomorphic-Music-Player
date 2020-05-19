import React from 'react';
import NotFoundSvg from '../../img/undraw_not_found_60pq.svg';

import { ErrorCode, ErrorDescription, Img } from './style';
import StyledContainer from '../../components/Container/style';


const NotFound = props => {

    return (
        <StyledContainer >
            <Img src={NotFoundSvg} />
            <ErrorCode >404</ErrorCode>
            <ErrorDescription >Página não encontrada</ErrorDescription>

        </StyledContainer>
    )

}





export default NotFound;