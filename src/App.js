import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle';
import { themes } from './styles/themes';

import { ThemeProvider } from "styled-components";

import { StylesProvider } from '@material-ui/styles';

import Header from './components/Header/index';
import StyledContainer from './components/Container/style';

import Routes from './routes';
import styled from 'styled-components';

import TokenContext from './utils/TokenContext';

const Container = styled(StyledContainer)`
  position: relative;
  display: block;
  margin: 10px auto 0 auto;
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
  width: 360px;
  height: 640px;
`

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
      token: localStorage.getItem('@music-player/spotify-token') ,
    }

    console.log('Token ' + this.state.token);
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)

    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount(){
    const hashToken = this.getHashParams().access_token;
    if ( hashToken && hashToken !== this.state.token){
      localStorage.setItem('@music-player/spotify-token', hashToken);
      this.setState({token: hashToken})
    }
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
            <TokenContext.Provider value = {this.state.token}>
              <Container >
                <Routes />
              </Container>
            </TokenContext.Provider>
          </ThemeProvider>

        </StylesProvider>

      </BrowserRouter>

    );
  }
}



export default App;
