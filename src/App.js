import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MainInfo from './Components/MainInfo';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainInfo/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
