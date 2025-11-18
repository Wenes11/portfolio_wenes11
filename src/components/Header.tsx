/* Copie e cole este conteúdo TODO para o seu arquivo: src/components/Header.tsx */

import React from 'react';

// Um Header limpo que não pede 'project' e tem os links de navegação
const Header: React.FC = () => {
  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Certificados', href: '#certifications' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-center md:justify-end">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;