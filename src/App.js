import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <div className='flex flex-col gap-16 xl:gap-0'>
      <Header />
      <Hero />
      <CallToAction />
    </div>
  );
}

export default App;
