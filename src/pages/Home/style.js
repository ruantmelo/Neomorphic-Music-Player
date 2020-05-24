import styled from 'styled-components';
import StyledContainer from '../../components/Container/style';

export const Container = styled(StyledContainer)`
    height: 85%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px ${({theme}) => theme.primary.dark}; 
        box-shadow: inset 0 0 6px ${({theme}) => theme.primary.dark};
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${({theme}) => theme.primary.dark};
         
    } 
`

export const SectionTitle = styled.h2`
color: ${({theme}) => theme.surface};
font-size: 24px;
margin: 20px 0;
`
