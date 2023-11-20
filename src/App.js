import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import { useEffect, useState } from 'react';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/Utilities/NotFound';

function App() {
  const [theme, setTheme] = useState('dark');
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    if (toggled) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [toggled]);
  return (
    <div className='App h-screen'>
      <NavBar setToggled={setToggled} toggled={toggled} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
