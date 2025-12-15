// src/components/CertificateCard.tsx
import React from 'react';
import type { Certificate } from '../data/portfolioData';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/5 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-amber-500/10 transition-colors">
            {/* Ícone de Certificado Simplificado */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
          {certificate.date}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-amber-400 transition-colors">
        {certificate.title}
      </h3>
      <p className="text-sm text-slate-400 mb-4">{certificate.issuer}</p>
      
      {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
        <a 
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-sm text-amber-500 hover:text-amber-300 flex items-center gap-1 transition-colors"
        >
          Ver Credencial
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default CertificateCard;
