import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Weather from './components/Weather';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <About />
      <Weather />
      <History />
      <Timeline />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;