import React  from 'react';
import styled from 'styled-components';
import MusicalCarousel from '../../components/MusicalCarousel';
import {StyledPageContainer} from '../../components/Container/style';

const SectionTitle = styled.h2`
    color: ${({theme}) => theme.surface};
    font-size: 24px;
    font-weight: bold;
    margin: 0px auto 10px auto;
`

const Section = styled.section`
    margin: 5px auto 0px auto;
`

export const MusicalSection = ({type, title, data, queryParams}) => {
    return(
        <Section>
            <SectionTitle>{title}</SectionTitle>
            <MusicalCarousel type = {type} queryParams = {queryParams} data = {data}/>
        </Section>
        
    )
}

export const PageContainer = styled(StyledPageContainer)`

`;

const ContainerNameHeader = styled.div`
    display: flex;
    padding-bottom: 10px;
    color: ${({theme}) => theme.alternative.main};
    font-size: 14px;
    justify-content: center;
`

export const NameHeader = () => (
    <ContainerNameHeader>Reactify</ContainerNameHeader>
)

export const ContainerMusics = styled.div`
    height: 85%;
    margin: 5px 10px 5px 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px ${({theme}) => theme.primary.light}; 
        box-shadow: inset 0 0 6px ${({theme}) => theme.primary.light};
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${({theme}) => theme.primary.dark};
         
    } 
`

