import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Nur Azhim Ramadhan</span>
        </div>
        
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>

          <button
            className="nav-link"
            onClick={() => {
              scrollToSection('home');
              setMenuOpen(false);
            }}
          >
            Home
          </button>

          <button
            className="nav-link"
            onClick={() => {
              scrollToSection('about');
              setMenuOpen(false);
            }}
          >
            About
          </button>

          <button
            className="nav-link"
            onClick={() => {
              scrollToSection('achievements');
              setMenuOpen(false);
            }}
          >
            Achievements
          </button>

          <button
            className="nav-link"
            onClick={() => {
              scrollToSection('projects');
              setMenuOpen(false);
            }}
          >
            Projects
          </button>

          <button
            className="nav-link"
            onClick={() => {
              scrollToSection('contact');
              setMenuOpen(false);
            }}
          >
            Contact
          </button>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
