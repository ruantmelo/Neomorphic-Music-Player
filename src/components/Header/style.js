import styled from 'styled-components';


const StyledHeader = styled.header`
    font-family: inherit;
    background: ${({ theme }) => theme.primary.dark};
    border-bottom: ${({ theme }) => '1px solid ' + theme.primary.light};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default StyledHeader;