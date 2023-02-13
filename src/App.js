import './app.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projexts from './components/Projexts';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projexts/>
      <Contact/>
    </div>
  );
}

export default App;
