/* Copie e cole este conteúdo TODO para o seu arquivo: src/App.tsx */

import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import CertificateCard from './components/CertificateCard';
// Importa os dados
import { portfolioData } from './data/portfolioData';

// Ícones (sem mudanças)
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.001 3.508-4.001 1.666 0 2.492 1.115 2.492 2.75v9.65h4.983v-8.75c0-4.75-2.69-7.25-6.25-7.25s-5.222 2.5-6.231 4.25h.021v-3.5h-4.989v16h4.989z"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372. eighties .1102. eighties 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.229-1.667 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.229 1.667 4.771 4.919-4.919 1.266.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.268.198-6.133 2.063-6.331 6.331-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.198 4.268 2.063 6.133 6.331 6.331 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.268-.198 6.133-2.063 6.331-6.331.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.198-4.268-2.063-6.133-6.331-6.331-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.441-.645 1.441-1.44s-.645-1.44-1.441-1.44z"/></svg>;


function App() {
  return (
    // MUDANÇA 1: Removemos o 'bg-slate-900' daqui,
    // porque o 'body' (no index.css) agora controla o fundo
    <div className="text-slate-300 min-h-screen font-sans">
      <Header />

      <main className="container mx-auto px-6 py-12">
        
        {/* MUDANÇA 2: Transformamos a seção "Sobre" num "cartão de vidro" */}
        <section 
          id="about" 
          className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-12 mb-24 scroll-mt-20 
                     rounded-lg overflow-hidden p-8 md:p-12 border border-slate-700 shadow-xl
                     bg-slate-800/60 backdrop-blur-lg" // <-- CLASSES DE "VIDRO" ADICIONADAS AQUI
        >
          {/* MUDANÇA 3: Removemos os 'divs' de fundo e overlay que estavam aqui dentro */}

          {/* O Conteúdo (Foto) */}
          <img 
            src={portfolioData.profileImageUrl}
            alt="Foto de João Vitor" 
            className="w-56 h-56 rounded-full object-cover object-top border-4 border-emerald-400 shadow-2xl"
          />
          {/* O Conteúdo (Texto) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-tight">
              Olá, eu sou o <span className="text-emerald-400">{portfolioData.name}</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-slate-300 mt-3 mb-6">
              {portfolioData.role}
            </h2>
            <p className="max-w-3xl leading-relaxed text-lg text-slate-200">
              {portfolioData.about}
            </p>
          </div>
        </section>

        {/* O resto do seu site (Projetos, Experiência, etc.) continua igual... */}

        <section id="projects" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Experiência Profissional</h2>
          <div className="max-w-3xl mx-auto space-y-8 relative border-l-2 border-slate-700 pl-8">
            {portfolioData.experiences.map((exp, index) => (
              <div key={index} className="relative">
                  <div className="absolute -left-10 h-4 w-4 bg-emerald-400 rounded-full mt-1.5"></div>
                  <h3 className="text-xl font-bold text-emerald-400">{exp.role}</h3>
                  <p className="font-semibold text-slate-400">{exp.company} <span className="font-normal text-sm">({exp.duration})</span></p>
                  <p className="mt-2 text-slate-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Certificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.certifications.map(cert => (
              <CertificateCard key={cert.title} certificate={cert} />
            ))}
          </div>
        </section>

        <section id="contact" className="text-center scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Entre em Contato</h2>
            <p className="mb-8 max-w-xl mx-auto">Sinta-se à vontade para entrar em contato comigo por qualquer um dos canais abaixo!</p>
            <div className="flex justify-center items-center gap-8">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors" title="Email"><MailIcon /></a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="LinkedIn"><LinkedinIcon /></a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="GitHub"><GithubIcon /></a>
              <a href={`https://wa.me/${portfolioData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="WhatsApp"><WhatsappIcon /></a>
              
              {portfolioData.contact.instagram && (
                <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Instagram"><InstagramIcon /></a>
              )}

            </div>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-slate-800 mt-12">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;