import React from 'react';
import { Route, Switch as SwitchRouter } from "react-router-dom";



import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home';


const routes = [
  {
    path: "/",
    component: Main,
    routes: [
      {
        path: "/home",
        component: Login,
      },
      {
        path: "/search",
        component: Search
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    
  }
];

const Routes = props => {
    return (
      <SwitchRouter>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </SwitchRouter>
    )
}

export default Routes




// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact = {route.exact? route.exact : false}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}



