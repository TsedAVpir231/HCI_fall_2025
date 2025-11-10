import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './js/core/Router';
import eventBus from './js/core/EventBus';
import Header from './js/components/Header';
import Hero from './js/components/Hero';
import Projects from './js/components/Projects';
import Catalog from './js/components/Catalog';
import Rent from './js/components/Rent';
import News from './js/components/News';
import Footer from './js/components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Projects />
        <Catalog />
        <Rent />
        <News />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme + '-theme');
    localStorage.setItem('theme', theme);
    eventBus.emit('themeChanged', theme);
  }, [theme]);

  useEffect(() => {
    const handleToggle = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    eventBus.on('toggleTheme', handleToggle);
    return () => eventBus.off('toggleTheme', handleToggle);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setTheme('light');
    }
  }, []);

  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}