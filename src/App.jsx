import { useState } from 'react'

import './App.css'
import Fields from './components/Fields'
import Intro from './components/FirstPage'
import Header from './components/Header'
import Contact from './components/ContactUs'
import Footer from './components/Footer'
import CF from './components/CfApi'
import Project from './components/Projects'

function App() {
  https://codeforces.com/api/user.info?handles=legendary09

  return (
    <div className="App  dark:bg-[#0f1421]" >
    <Header/>
    <Intro/>
    <Fields/>
    <CF/>
    <Project/>
    <Contact/>
    <Footer className='absolute bottom-64'/>
    
      
    </div>
  )
}

export default App
