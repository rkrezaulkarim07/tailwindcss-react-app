
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Menu from './pages/menu';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Home from './pages';
// import Home from './pages';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
      </Switch>
    </>
  );
}

export default App;
