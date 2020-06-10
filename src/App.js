import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import GlobalStyle from './components/styles/Global';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
