/* Copie e cole este conteúdo TODO para o seu arquivo: src/components/CertificateCard.tsx */

import React from 'react';
// Importa o "tipo" de Certificado do seu arquivo de dados
// Usamos "import type" para corrigir o erro ts(1484)
import type { Certificate } from '../data/portfolioData';

// Diz ao TypeScript que o componente espera um objeto 'certificate' do tipo 'Certificate'
const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    // ADICIONADO: Efeito de hover profissional
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
      <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover opacity-75" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-emerald-400 mb-1">{certificate.title}</h3>
        <p className="text-slate-400 text-sm">{certificate.issuer}</p>
      </div>
    </div>
  );
};

export default CertificateCard;