import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import CallToAction from './components/sections/CallToAction';
import Hiking from './components/sections/Hiking';
import Camping from './components/sections/Camping';
import Climbing from './components/sections/Climbing';
import WaterSports from './components/sections/WaterSports';

function App() {
  return (
    <div className='flex flex-col gap-16 xl:gap-0 overflow-hidden'>
      <Header />
      <Hero />
      <CallToAction />
      <Hiking />
      <Camping />
      <Climbing />
      <WaterSports />
    </div>
  );
}

export default App;
