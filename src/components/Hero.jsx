import React from 'react';
import profile from "../assets/profile.jpg";
import { Download, FolderOpen } from 'lucide-react';
import { profileData, cvLink } from '../mock';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{profileData.name}</h1>
            <h2 className="hero-title">{profileData.title}</h2>
            <p className="hero-summary">{profileData.summary}</p>

            <div className="hero-buttons">
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>

              <button onClick={scrollToProjects} className="btn btn-secondary">
                <FolderOpen size={20} />
                <span>View Projects</span>
              </button>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src={profile}
                alt={profileData.name}
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
