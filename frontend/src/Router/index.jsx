import { useEffect, useState } from 'react'
import '../styles/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css/bundle";
import Homepage from '../pages/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/signIn-page';
import BlogPage from '../pages/blogpage';
import Header from '../components/Header';
import Editor from '../pages/editorpage';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/editor" element={<Editor />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
