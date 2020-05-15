import styled from 'styled-components';

export const StyledButton = styled.button`
    font-family: inherit;
    font-size: '16px';
    padding: 2px;
    background: ${({ theme }) => theme.primary.main};
    box-sizing: border-box;
    border: none;
    display: block;
    margin:  5px;
    cursor: pointer;
    color: ${({ theme, alternative }) => alternative ? theme.alternative.main : theme.surface};
    outline: none;
    box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

    &:active{
        box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
    }
`


// const StyledButton = styled.button`
//     font-family: inherit;
//     font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
//     padding: ${props => props.padding || '2px'};
//     background: ${({ theme }) => theme.primary.main};
//     box-sizing: border-box;
//     border: none;
//     width: ${({ width }) => width ? width : 'auto'};
//     display: block;
//     margin: ${({ margin }) => margin ? margin : '0'};
//     cursor: pointer;
//     color: ${({ theme, alternative }) => alternative ? theme.alternative.main : theme.surface};
//     line-height: 50px;
//     border-radius: 15px;
//     outline: none;
//     box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

//     &:active{
//         box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
//     }
// `


export default StyledButton;