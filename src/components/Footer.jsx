import { Mail, Phone, Heart } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Kiri: Identitas */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-white text-[11px] font-bold">
                NSY
              </span>
              <p className="text-sm font-bold text-ink">Neng Siti Yuniasari</p>
            </div>
            <p className="text-xs text-muted">
              Administrasi · Customer Service · Receptionist
            </p>
          </div>

          {/* Tengah: Sosial */}
          <div className="flex items-center gap-2">
            {[
              { href: 'https://www.linkedin.com/in/nengsitiyuniasari', label: 'LinkedIn', icon: <LinkedinIcon className="w-4 h-4" /> },
              { href: 'mailto:sitiyuniasari247@gmail.com',             label: 'Email',    icon: <Mail className="w-4 h-4" /> },
              { href: 'https://wa.me/6287834016813',                   label: 'WhatsApp', icon: <Phone className="w-4 h-4" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:bg-accent-muted transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Kanan: Copyright */}
          <p className="text-xs text-subtle flex items-center gap-1">
            © 2026 Neng Siti Yuniasari
          </p>
        </div>
      </div>
    </footer>
  );
}
