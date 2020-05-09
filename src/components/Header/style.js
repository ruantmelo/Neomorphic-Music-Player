import styled from 'styled-components';


const StyledHeader = styled.header`
    background: ${({ theme }) => theme.primary.light};
    border-bottom: ${({ theme }) => '1px solid ' + theme.primary.dark};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default StyledHeader;