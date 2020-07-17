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

const Container = styled(StyledContainer)`
  position: relative;
  display: block;
  margin: 10px auto 0px auto;
  padding: 10px 5px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 360px;
  min-height: 500px;
  height: calc(100vh - 50px);
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => {
        const newTheme = state.theme === themes.dark 
                            ? themes.light
                            : themes.dark
        localStorage.setItem('@reactify-rm/theme', newTheme.name);

        return {theme: newTheme};
      })
    }

    // Estado também contém a função de atualização
    // Passando para o provedor de contexto
    let theme = localStorage.getItem('@reactify-rm/theme')
    if (!theme) {
      localStorage.setItem('@reactify-rm/theme', 'light')
      theme = 'light';
    }

    this.state = {
      theme: themes[theme],
      toggleTheme: this.toggleTheme,
    }
  }

  componentDidMount(){
    this._configToken();
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
  
  _configToken(){
    const hashToken = this.getHashParams().access_token;
    const hashRefresh = this.getHashParams().refresh_token;

    if ( hashToken && hashToken !== this.state.token){
      localStorage.setItem('@reactify-rm/spotify-token', hashToken);
      this.setState({token: hashToken})
    }

    if(hashRefresh && hashRefresh !== this.state.refresh_token ){
      localStorage.setItem('@reactify-rm/spotify-refresh_token', hashRefresh);
      this.setState({refresh_token: hashRefresh});
    }
  }

  render() {
    return (
      <BrowserRouter>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <ThemeProvider theme={this.state.theme} >
            <Header toggleTheme={this.state.toggleTheme} themeName={this.state.theme.name} />
            {/* <TokenContext.Provider value = {this.state.token}> */}
              <Container >
                <Routes />
              </Container>
            {/* </TokenContext.Provider> */}
          </ThemeProvider>
        </StylesProvider>

      </BrowserRouter>

    );
  }
}



export default App;
