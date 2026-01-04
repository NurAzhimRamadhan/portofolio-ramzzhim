import React from 'react';
import { Award } from 'lucide-react';
import { profileData, focusAreas } from '../mock';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="gpa-card">
            <div className="gpa-icon">
              <Award size={32} />
            </div>
            <div className="gpa-content">
              <span className="gpa-label">Cumulative GPA</span>
              <span className="gpa-value">{profileData.gpa}</span>
            </div>
          </div>

          <div className="focus-areas">
            <h3 className="focus-title">Areas of Focus</h3>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <div key={index} className="focus-card">
                  <div className="focus-icon">•</div>
                  <span className="focus-text">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
