import React, { useState } from 'react';

// Ícones
const MenuIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg> );
const CloseIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg> );

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { href: "#about", label: "Sobre" },
        { href: "#projects", label: "Projetos" },
        { href: "#experience", label: "Experiência" },
        { href: "#certifications", label: "Certificados" },
        { href: "#contact", label: "Contato" },
    ];

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center"> {/* py-3 para ajustar a altura com o padding dos links */}
                <a href="#" className="text-xl font-bold text-emerald-400">Bem Vindo ao meu Site</a>
                
                {/* Links para Desktop */}
                <div className="hidden md:flex space-x-8 items-center"> {/* Aumentei o espaço de space-x-6 para space-x-8 */}
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            // ADICIONADO: Padding (px, py) e cantos arredondados para um visual mais limpo
                            className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 px-3 py-2 rounded-md"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Botão do Menu Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 focus:outline-none">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile (quando aberto) */}
            {isOpen && (
                <div className="md:hidden bg-slate-800/95"> {/* Adicionado um pouco de transparência */}
                    <div className="container mx-auto px-6 pt-2 pb-4 flex flex-col space-y-2"> {/* Reduzido o space-y para compensar o padding dos links */}
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                // ADICIONADO: Padding, cantos arredondados e um fundo no hover
                                className="text-slate-300 hover:text-emerald-400 block text-center transition-colors duration-300 py-2 rounded-md hover:bg-slate-700"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;