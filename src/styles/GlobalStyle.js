import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
 ${reset}

body *{
	transition: background 200ms linear, box-shadow 200ms linear;
	font-family: 'Roboto', sans-serif;
}

`