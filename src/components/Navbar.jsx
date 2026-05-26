import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, FileText } from 'lucide-react';

const NAV = [
  { id: 'home',       label: 'Home' },
  { id: 'tentang',    label: 'Tentang' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'keahlian',   label: 'Keahlian' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'organisasi', label: 'Organisasi' },
  { id: 'sertifikat', label: 'Sertifikat' },
  { id: 'kontak',     label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    scroller.scrollTo(id, { smooth: true, duration: 400, offset: -64 });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? 'bg-surface/95 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 shrink-0 group">
            <span className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-white text-[11px] font-bold">NSY</span>
            <span className="text-sm font-bold text-ink group-hover:text-accent transition-colors hidden sm:block">Siti Yuniasari</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                spy smooth
                offset={-64}
                duration={400}
                activeClass="!text-accent !bg-accent-muted"
                className="px-2.5 py-1.5 text-[12.5px] font-medium text-muted hover:text-ink rounded-lg hover:bg-surface-2 cursor-pointer transition-colors whitespace-nowrap"
              >
                {label}
              </ScrollLink>
            ))}
          </nav>

          {/* Desktop CV */}
          <a href="/CV.pdf" download="CV_Neng_Siti_Yuniasari.pdf"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors shrink-0">
            <FileText className="w-3.5 h-3.5" />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-muted hover:text-ink hover:bg-surface-2 transition-colors"
            aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — simple show/hide, no animation */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 lg:hidden px-4">
          <div className="bg-surface rounded-2xl border border-line shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-line p-px">
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="bg-surface px-4 py-3 text-sm font-medium text-body hover:text-accent hover:bg-accent-muted transition-colors text-center"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-3 border-t border-line">
              <a href="/CV.pdf" download="CV_Neng_Siti_Yuniasari.pdf"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-colors">
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
