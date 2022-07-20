import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Landing/Home/Home';
import Service from './components/Landing/Service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
