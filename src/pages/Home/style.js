import React  from 'react';
import styled from 'styled-components';
import MusicalCarousel from '../../components/MusicalCarousel';

const SectionTitle = styled.h2`
    color: ${({theme}) => theme.surface};
    font-size: 24px;
    font-weight: bold;
    margin: 10px auto;
`

const Section = styled.section`
    margin: 20px auto;
`

export const MusicalSection = ({type, title, data, queryParams}) => {
    return(
        <Section>
            <SectionTitle>{title}</SectionTitle>
            <MusicalCarousel type = {type} queryParams = {queryParams? queryParams : {}} data = {data}/>
        </Section>
        
    )
}

export const Container = styled.div`
    height: 100%;
`

export const ContainerMusics = styled.div`
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

