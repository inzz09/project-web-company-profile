// App.tsx yang benar
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Team from './components/Team';
import Career from './components/Career';
import Portfolio from './components/Portofolio';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <News />
      <Gallery />
      <Partners />
      <Team />
      <Career />
      <Portfolio />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;