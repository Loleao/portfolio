import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { About } from './sections/about/About';
import { Hero } from './sections/hero/Hero';

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
      </main>
    </div>
  );
}

export default App;
