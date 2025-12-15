// src/components/ProjectCard.tsx
import React from 'react';
// Agora ele vai encontrar o 'Project' porque nós o exportamos no passo 1
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {/* O erro do 'tech' some aqui porque definimos que é string[] na interface */}
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-amber-500/90 text-xs rounded-full border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold rounded-lg transition-colors text-sm"
          >
            Ver Projeto
          </a>
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
