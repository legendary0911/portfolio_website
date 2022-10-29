import { useEffect, useState } from 'react'

import './App.css'
import Fields from './components/Fields'
import Intro from './components/FirstPage'
import Header from './components/Header'
import Contact from './components/ContactUs'
import Footer from './components/Footer'
import CF from './components/CfApi'
import Project from './components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init({
        duration: 1500
    });
}, []); 



  return (
    <div className="App bg-yellow-500 dark:bg-[#111827]" >
    <Header/>
    <Intro/>
    <Fields/>
    <CF/>
    <Project/>
    <Contact/>
    {/* <Footer className='absolute bottom-64'/> */}
    
      
    </div>
  )
}

export default App
