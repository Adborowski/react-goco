import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import AppRouter from './routers/AppRouter';
import HomeRouter from './routers/HomeRouter'
import Navbar from './components/Navbar';

function App() {

  return (

    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="logo-font.otf" />
      <AppRouter></AppRouter>

    </div>

  );

}

export default App;
