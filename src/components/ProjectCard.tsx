import React from 'react';

const ExternalLinkIcon = ({ className = "w-5 h-5" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> );

interface Project {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden flex flex-col group border border-slate-700 hover:shadow-lg hover:shadow-emerald-900/30 transition-shadow duration-300">
            <div className="overflow-hidden">
                <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                        <ExternalLinkIcon />
                    </a>
                </div>
                <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-slate-700 text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
