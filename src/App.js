import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch as SwitchRouter } from "react-router-dom";
import { Button } from './components/Button/index';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeContext, themes } from './styles/themes';
import Header from './components/Header/index';
import Login from './pages/Login'






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
    // Todo o estado é passado para o provedor
    return (
      <BrowserRouter>
        <GlobalStyle />

        <ThemeContext.Provider value={this.state}>

          <Header />


          <SwitchRouter>
            <Route path="/" exact>
              <Fragment>
                <Button>Teste</Button>
              </Fragment>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </SwitchRouter>
        </ThemeContext.Provider>

      </BrowserRouter>

    );
  }
}

export default App;
