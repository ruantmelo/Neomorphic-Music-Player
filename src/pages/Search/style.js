import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {StyledHTMLInput} from '../../components/Input/style.js'
import {StyledPageContainer} from '../../components/Container/style';

export const Container = styled.div`
    height: 85%;
`

export const ContainerResults = styled.div`
    height: 90%;
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
const SectionTitle = styled.h2`
    color: ${({theme}) => theme.surface};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Section = styled.section`
    margin: 0px auto 20px 10px;
`
export const SearchSection = ({title, children}) => (
    <Section>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </Section>
)


export const PageContainer = styled(StyledPageContainer)`
`;

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 0;
    height: auto;
    justify-content: center;
`

export const Input = styled(StyledHTMLInput)`
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 2px 2px 2px 10px;
    height: 2em;
`;

export const WaitingContainer = styled.div`
    margin: 100px 0;
    text-align: center;
    align-self: center;
    font-size: 120px;
    color: ${({theme}) => theme.name === 'dark'? theme.primary.light : theme.primary.dark};
`

const WaitingMessage = styled.p`
    width: 8em;
    margin: auto auto;
    font-size: 30px;
    text-align: left;
    overflow-wrap: break-word;
`

export const WaitingSearch = () => {
    return (
        <WaitingContainer>
            <SearchIcon fontSize = 'inherit'/>
            <WaitingMessage>Search for songs, albums, playlists and more</WaitingMessage>
        </WaitingContainer>
    )
}

