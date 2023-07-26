import './App.css';
import Home from './components/Home';
import Video from './components/Video';
import Photo from './components/Photo';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Home />
        <Video />
        <Photo />
        <About />
        <Contact />
    </div>
  );
}

export default App;
