import { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import CertificateModal from '../components/CertificateModal';

// Import foto sertifikat asli — urutan sesuai visual sertifikat
import imgAccounting  from '../assets/sertificates/accounting.jpg';
import imgPivotTable  from '../assets/sertificates/pivottable.jpg';
import imgDataViz     from '../assets/sertificates/datavisualization.jpg';
import imgTurning     from '../assets/sertificates/turning.jpg';       // Webinar Turning Passion → id:4
import imgWorkshop    from '../assets/sertificates/workshopaffiliate.jpg'; // Workshop merah → id:5
import imgWebinar     from '../assets/sertificates/webinar.png';       // Sentra Bisnis Wikrama → id:6

// Peta id → foto yang benar berdasarkan isi sertifikat asli
const CERT_IMAGES = {
  1: imgAccounting,   // Accounting Fundamentals
  2: imgPivotTable,   // Pivot Table in Microsoft Excel
  3: imgDataViz,      // Data Visualization with Microsoft Excel
  4: imgTurning,      // Turning Passion into Action (webinar karir)
  5: imgWorkshop,     // Level Up Your CV workshop (sertifikat merah)
  6: imgWebinar,      // Level Up Your CV webinar Sentra Bisnis Wikrama
};

const CertificatesPreview = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen]   = useState(false);

  const preview = certificatesData.slice(0, 6);

  return (
    <section id="sertifikat" className="py-16 md:py-20 bg-canvas texture-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-sm font-medium text-accent mb-2">Sertifikasi</p>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Sertifikat Pilihan</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Sertifikasi di bidang administrasi, data, keuangan, dan teknologi digital.
          </p>
        </div>

        {/* Grid — 1 kolom mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {preview.map((cert) => {
            const photo = CERT_IMAGES[cert.id];
            return (
              <button
                key={cert.id}
                onClick={() => { setSelectedCert({ ...cert, localImage: photo }); setIsModalOpen(true); }}
                className="bg-surface rounded-2xl md:rounded-3xl border border-line overflow-hidden hover:border-accent hover:shadow-md transition-all duration-200 flex flex-col text-left group w-full"
              >
                {/* Foto sertifikat */}
                <div className="relative w-full overflow-hidden bg-surface-2" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={photo}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200" />
                  {/* Badge kategori */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold text-white bg-accent/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 flex flex-col gap-2.5 grow">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-ink leading-snug line-clamp-2 group-hover:text-accent transition-colors flex-1">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-subtle shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-line">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-xs text-muted truncate">{cert.issuer}</span>
                    </div>
                    <span className="text-xs font-semibold text-subtle shrink-0 ml-2">{cert.year}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      <CertificateModal
        certificate={selectedCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CertificatesPreview;
