import styled from 'styled-components';


const StyledButton = styled.button`
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    font-size: 18px;
    padding: 10px;
    background: ${({ theme }) => theme.primary.main};
    box-sizing: border-box;
    border: none;
    display: block;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme, alternative }) => alternative ? theme.alternative.main : theme.surface};
    outline: none;
    box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

    &:active{
        box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
    }
`
export default StyledButton;

// export const StyledIconBtn = styled(IconButton)`
//     font-size: 12px;
//     background: ${({ theme }) => theme.primary.main};
//     cursor: pointer;
//     box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

//     &:active{
//         box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
//     }
// `

// const StyledLinkButton = styled.a`
//     cursor: pointer;
//     color: ${({ theme, alternative }) => alternative ? theme.alternative.main : theme.surface};
//     outline: none;
//     box-shadow: ${({ theme }) => '4px 4px 10px -1px ' + theme.primary.dark + ' , -3px -3px 15px -1px ' + theme.primary.light};

//     &:active{
//         box-shadow: ${({ theme }) => 'inset 4px 4px 6px -1px ' + theme.primary.dark + ' , inset -3px -3px 5px -1px ' + theme.primary.light};
//     }
// ` 

// export const StyledIconBtn = styled.button`
//     font-family: inherit;
//     font-size: 18px;
//     padding: 10px;
//     background: ${({ theme }) => theme.primary.main};
//     box-sizing: border-box;
//     border: none;
//     display: block;
//     font-size: 18px;
//     text-align: center;
//     background: ${({ theme }) => theme.primary.main};
//     cursor: pointer;
//     padding: 5px;
//     border: none;
//     outline: none;
// `

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


