import styled from 'styled-components';

const StyledButton = styled.button`
    padding: ${props => props.padding || '10px'};
    background: ${({ theme }) => theme.primary.main};
    border: none;
    display: block;
    margin: auto auto;
    cursor: pointer;
    color: ${({ theme }) => theme.surface};
    line-height: 50px;
    border-radius: 15px;
    margin-top: 10px;
    outline: none;
    box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

    &:hover{
        box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
    }
`

export default StyledButton;