
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Work from './components/Work.tsx';
import Skills from './components/Skills.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import AIChatbot from './components/AIChatbot.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-dark">
      <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="work" className="py-24 bg-zinc-50 dark:bg-[#0d0d0d]">
          <Work />
        </section>
        
        <section id="skills" className="py-24 bg-white dark:bg-dark">
          <Skills />
        </section>
        
        <section id="about" className="py-24 bg-zinc-50 dark:bg-[#0d0d0d]">
          <About />
        </section>
        
        <section id="contact" className="py-24 bg-white dark:bg-dark">
          <Contact />
        </section>
      </main>

      <AIChatbot />
      <Footer />
    </div>
  );
};

export default App;
