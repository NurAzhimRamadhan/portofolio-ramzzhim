import React, { useState, useEffect } from 'react';
import { FolderOpen } from 'lucide-react';
import { achievements } from '../mock';
import './Achievements.css';

const Achievements = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {   
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-image-wrapper">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="achievement-image"
                />
                <div className="achievement-year-badge">{achievement.year}</div>
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                
                <a 
                  href={achievement.folderLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="achievement-button"
                >
                  <FolderOpen size={18} />
                  <span>Open Folder</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
