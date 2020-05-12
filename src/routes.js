import React, { Fragment } from 'react';
import { Route, Switch as SwitchRouter } from "react-router-dom";

import { Button } from './components/Button/index';

import Login from './pages/Login'
import NotFound from './pages/NotFound'


const Routes = props => {
    return (
        <SwitchRouter>
            <Route path="/" exact>
                <Fragment>
                    <Button>Teste</Button>
                </Fragment>
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/" exact>
                <Fragment>
                    <Button>Teste</Button>
                </Fragment>
            </Route>

            <Route component={NotFound} />

        </SwitchRouter>
    )
}

export default Routes