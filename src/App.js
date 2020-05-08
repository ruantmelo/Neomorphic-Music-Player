import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch as SwitchRouter } from "react-router-dom";
import { Button } from './components/Button/index';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeContext, themes } from './styles/themes';

import Switch from '@material-ui/core/Switch';

const ThemeSwitch = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Switch onChange={toggleTheme} />

      )
      }
    </ThemeContext.Consumer>
  )
}

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
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // Todo o estado é passado para o provedor
    return (
      <BrowserRouter>
        <GlobalStyle />
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitch />
          <SwitchRouter>
            <Route path="/">
              <Fragment>
                <h1>Hello World</h1>
                <Button>Teste</Button>
              </Fragment>
            </Route>
          </SwitchRouter>
        </ThemeContext.Provider>

      </BrowserRouter>

    );
  }
}

export default App;