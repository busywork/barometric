import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchWeather } from './redux/weather';

import './App.css';

import GlobalStyle from './components/styles/Global';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();
  const location = { lat: 41.8781, lng: -87.6298 };
  useEffect(() => {
    dispatch(fetchWeather(location));
  });

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
