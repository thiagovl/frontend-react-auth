import React from 'react';
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./components/ui/Themes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthenticatedRoute from './service/AuthenticatedRoute';
import { AuthProvider } from './context/AuthProvider';
import history from './history';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter > 
      <AuthProvider >
        <Router history={history}>
          <Switch>
            <Route exact path="/" exact component={Login} />
            <AuthenticatedRoute exact path="/home" component={Home} />
            <AuthenticatedRoute exact path="/about" component={About} />
          </Switch>
        </Router>
      </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
