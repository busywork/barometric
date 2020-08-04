import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './utils';
import { GlobalStyles, theme } from './styles';
import Toggle from './components/Toggle';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Footer from './components/Footer';
import Corner from './components/Corner';

export default () => {
  const darkMode = useDarkMode();
  const mode = !darkMode.value ? theme.light : theme.dark;

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Toggle />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      <Corner />
    </ThemeProvider>
  );
};
