import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MainInfo from './Components/MainInfo';
import Navigation from './Components/Navigation';
import PatientLogin from './Components/PatientLogin';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <MainInfo />
        <PatientLogin />
      </div>
      <Footer />
    </div>
  );
}

export default App;
