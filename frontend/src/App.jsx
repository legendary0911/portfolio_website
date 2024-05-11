import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css/bundle";
import Homepage from './pages/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/signIn-page/login-form';
import BlogPage from './pages/blogpage';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
