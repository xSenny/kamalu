import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import CallToAction from './components/sections/CallToAction';
import Hiking from './components/sections/Hiking';
import Camping from './components/sections/Camping';
import Climbing from './components/sections/Climbing';
import WaterSports from './components/sections/WaterSports';
import Testimonials from './components/sections/Testimonials';
import NewsLetter from './components/sections/NewsLetter';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <CallToAction />
      <Hiking />
      <Camping />
      <Climbing />
      <WaterSports />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
