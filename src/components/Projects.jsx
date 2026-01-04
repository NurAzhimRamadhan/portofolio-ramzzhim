import React, { useState, useEffect } from 'react';
import { X, FolderOpen, ExternalLink } from 'lucide-react';
import { projects } from '../mock';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Academic', 'Competition', 'Training', 'Organization', 'Professional'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-category-badge">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-buttons">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="project-button primary"
                  >
                    <ExternalLink size={18} />
                    <span>View Detail</span>
                  </button>
                  <a 
                    href={project.folderLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-button secondary"
                  >
                    <FolderOpen size={18} />
                    <span>Open Folder</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-header-image"
              />
            </div>
            
            <div className="modal-body">
              <div className="modal-category-badge">{selectedProject.category}</div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              
              <div className="modal-section">
                <h3 className="modal-section-title">Description</h3>
                <p className="modal-text">{selectedProject.description}</p>
              </div>
              
              <div className="modal-section">
                <h3 className="modal-section-title">Role</h3>
                <p className="modal-text">{selectedProject.role}</p>
              </div>
              
              <div className="modal-section">
                <h3 className="modal-section-title">Technologies & Skills</h3>
                <p className="modal-text">{selectedProject.technologies}</p>
              </div>
              
              <a 
                href={selectedProject.folderLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-button"
              >
                <FolderOpen size={20} />
                <span>Open Project Folder</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
