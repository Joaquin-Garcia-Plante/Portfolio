import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import styles from './styles/app.css';

function App() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Work></Work>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
