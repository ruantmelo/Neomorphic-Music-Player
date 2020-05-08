import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.display || 'block'};
    box-sizing: ${props => props.boxSizing || 'border-box'};
    align-items: ${props => props.alignItems || 'flex-start'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    position: ${props => props.position || 'static'};
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    transform: ${props => props.transform || 'none'};
    margin: ${props => props.margin || 'auto'};
    background: ${props => props.background || 'none'};
    border: ${props => props.border || 'none'};
`

export default Container;