import React from 'react';

interface Certificate {
    title: string;
    imageUrl: string;
}

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 group">
             <img 
                src={certificate.imageUrl} 
                alt={`Certificado de ${certificate.title}`} 
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:opacity-80" 
             />
             <div className="p-4 bg-slate-800/50">
                <h3 className="text-center font-semibold text-slate-200">{certificate.title}</h3>
             </div>
        </div>
    );
};

export default CertificateCard;
