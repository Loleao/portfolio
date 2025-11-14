import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { About } from './sections/about/About';
import { Hero } from './sections/hero/Hero';
import { Projects } from './sections/projects/Projects';
import { Skills } from './sections/skills/Skills';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <main>
        <section>
          <Hero/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Projects/>
        </section>
      </main>
    </div>
  );
}

export default App;
