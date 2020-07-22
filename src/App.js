import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';

import useDarkMode from './utils/useDarkMode';
import { GlobalStyles, light, dark } from './styles';
import Toggle from './components/Toggle';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Footer from './components/Footer';
import Corner from './components/Corner';

export default () => {
  const darkMode = useDarkMode();
  const theme = !darkMode.value ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toggle />
      <Navigation />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer />
      <Corner />
    </ThemeProvider>
  );
};
