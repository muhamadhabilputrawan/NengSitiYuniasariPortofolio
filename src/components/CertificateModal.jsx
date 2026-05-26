import { useEffect } from 'react';
import { X, Award, Calendar, Check, BarChart2, FileSpreadsheet, Database,  Megaphone, BookOpen, Tv, MoreHorizontal } from 'lucide-react';

const CATEGORY_STYLE = {
  'Finance':         { bg: 'bg-emerald-50',  border: 'border-emerald-200', icon: <BarChart2 className="w-14 h-14 text-emerald-400" />,    badge: 'bg-emerald-500' },
  'Microsoft Excel': { bg: 'bg-blue-50',     border: 'border-blue-200',    icon: <FileSpreadsheet className="w-14 h-14 text-blue-400" />,  badge: 'bg-blue-500' },
  'Data':            { bg: 'bg-violet-50',   border: 'border-violet-200',  icon: <Database className="w-14 h-14 text-violet-400" />,       badge: 'bg-violet-500' },
  'Administration':  { bg: 'bg-amber-50',    border: 'border-amber-200',   icon: <BookOpen className="w-14 h-14 text-amber-400" />,        badge: 'bg-amber-500' },
  'Social Media':    { bg: 'bg-pink-50',     border: 'border-pink-200',    icon: <Megaphone className="w-14 h-14 text-pink-400" />,        badge: 'bg-pink-500' },
  'Webinar':         { bg: 'bg-sky-50',      border: 'border-sky-200',     icon: <Tv className="w-14 h-14 text-sky-400" />,               badge: 'bg-sky-500' },
  'Others':          { bg: 'bg-stone-50',    border: 'border-stone-200',   icon: <MoreHorizontal className="w-14 h-14 text-stone-400" />,  badge: 'bg-stone-500' },
};

const getStyle = (category) =>
  CATEGORY_STYLE[category] ?? { bg: 'bg-surface-2', border: 'border-line', icon: <Award className="w-14 h-14 text-muted" />, badge: 'bg-accent' };

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const style = getStyle(certificate.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative z-10 bg-surface rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-line">

        {/* Header visual — foto asli kalau ada, fallback ke warna kategori */}
        {certificate.localImage ? (
          <div className="relative h-52 overflow-hidden rounded-t-3xl">
            <img
              src={certificate.localImage}
              alt={certificate.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className={`text-xs font-bold text-white ${style.badge} px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                {certificate.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className={`relative h-44 ${style.bg} border-b ${style.border} flex items-center justify-center overflow-hidden rounded-t-3xl`}>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/40" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/30" />
            <div className="relative z-10">{style.icon}</div>
            <div className="absolute bottom-4 left-5">
              <span className={`text-xs font-bold text-white ${style.badge} px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                {certificate.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-white transition-all"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Konten */}
        <div className="p-6 space-y-5">

          {/* Judul & meta */}
          <div>
            <h3 className="text-xl font-bold text-ink leading-snug mb-2">{certificate.title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted flex-wrap">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-accent" />
                {certificate.issuer}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                {certificate.year}
              </span>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-3">Deskripsi</p>
            <p className="text-sm text-body leading-relaxed">{certificate.description}</p>
          </div>

          {/* Kompetensi */}
          <div className="border-t border-line pt-5">
            <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-4">
              Kompetensi yang Dipelajari
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificate.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-canvas rounded-xl px-3 py-2.5 border border-line">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-body">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol bawah */}
          <div className="border-t border-line pt-5 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
