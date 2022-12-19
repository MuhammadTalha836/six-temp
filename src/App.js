
import React,{useRef, useEffect , useState }  from 'react';
import AOS from 'aos';
import { Route } from 'react-router-dom';
import NavBar from './New/components/NavBar';
import Home from './New/components/Home';
import About from './New/components/About';
import Gallery from './New/components/Gallery';
import Services from './New/components/Services';
import Contact from './New/components/Contact';
import Table from './New/components/Team';
import Team from './New/components/Team';
import Facts from './New/components/Facts';


function App() {


  //for page animations 
  const [windowDim,SetwindowDim] = useState({width: window.innerWidth, Height: window.innerHeight});

  const detectSize =()=>{
    SetwindowDim({width: window.innerWidth, Height: window.innerHeight});
  }
  
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  },);

  return (
      <div>
     <NavBar/>
     <Home/>
     <Services/>
     <About/>
     <Gallery/>
     <Facts/>
     <Team/>
     <Contact/>
      </div>
  );
}

export default App;