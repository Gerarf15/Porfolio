import React, {useState, useEffect} from 'react';
import './App.css'
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';


function App(){
  const [scrollHeight, setScrollheight] = useState(0)

  const handleScroll =()=>{
    const position = window.pageYOffset
    setScrollheight(position)
  }

  //cada vez q se hace scroll se actualice
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  },[scrollHeight])

  return (
    <div className='App'> 
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default App;
