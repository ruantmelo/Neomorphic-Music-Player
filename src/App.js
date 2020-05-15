import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle';
import { themes } from './styles/themes';

import { ThemeProvider } from "styled-components";

import { StylesProvider } from '@material-ui/styles';

import Header from './components/Header/index';
import Container from './components/Container/index';

import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));

    };

    // Estado também contém a função de atualização
    // Passando para o provedor de contexto
    let theme = localStorage.getItem('@music-player/theme')
    if (!theme) {
      localStorage.setItem('@music-player/theme', 'light')
      theme = 'light';
    }

    this.state = {
      theme: themes[theme],
      toggleTheme: this.toggleTheme,
    };

  }

  componentDidUpdate() {
    localStorage.setItem('@music-player/theme', this.state.theme.name);
  }

  render() {

    return (
      <BrowserRouter>
        <StylesProvider injectFirst>
          <GlobalStyle />

          <ThemeProvider theme={this.state.theme} >


            <Header toggleTheme={this.state.toggleTheme} themeName={this.state.theme.name} />
            <Container position='relative' margin='10px auto 10px auto' borderRadius='5px' padding='20px 40px' width='360px' height='640px' theme={this.state.theme}>
              <Routes />
            </Container>

          </ThemeProvider>

        </StylesProvider>

      </BrowserRouter>

    );
  }
}

export default App;
