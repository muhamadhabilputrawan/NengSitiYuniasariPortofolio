import { FileText, Mail, MapPin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import profilePhoto from '../assets/profile.jpeg';

const Hero = () => (
  <section id="home" className="min-h-screen pt-20 pb-16 flex items-center bg-canvas texture-bg">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

        {/* Kiri: Konten */}
        <div className="order-2 lg:order-1">
          <p className="text-sm text-muted mb-3 font-medium">
            Halo, perkenalkan saya 👋
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.1] mb-4">
            Neng Siti<br />
            <span className="text-accent">Yuniasari</span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            {['Staf Administrasi', 'Customer Service', 'Receptionist'].map((pos) => (
              <span key={pos} className="text-xs font-medium text-muted bg-surface-2 border border-line px-3 py-1 rounded-full">
                {pos}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-body leading-relaxed max-w-xl mb-6 border-l-2 border-accent pl-4">
            Siswi SMK Wikrama Bogor jurusan Manajemen Perkantoran dan Layanan Bisnis.
            Terampil dalam administrasi, pelayanan pelanggan, pengelolaan dokumen, dan pengolahan data.
          </p>

          <div className="flex items-center gap-1.5 text-sm text-muted mb-7">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span>Cisarua, Kab. Bogor, Jawa Barat</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <ScrollLink
              to="kontak"
              smooth={true}
              offset={-56}
              duration={500}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover cursor-pointer transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </ScrollLink>
            <a
              href="/CV.pdf"
              download="CV_Neng_Siti_Yuniasari.pdf"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-line text-ink text-sm font-semibold rounded-xl hover:border-accent hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </div>


        </div>

        {/* Kanan: Foto */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Dekorasi */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-accent-muted border border-accent-ring" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-surface-2 border border-line" />

            {/* Foto */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-3xl overflow-hidden border-2 border-line shadow-lg z-10 bg-surface-2">
              <img
                src={profilePhoto}
                alt="Neng Siti Yuniasari"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Badge bawah */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-surface border border-line rounded-2xl px-4 py-2 shadow-md whitespace-nowrap">
              <p className="text-[10px] text-muted font-medium text-center mb-0.5">Keahlian Utama</p>
              <p className="text-xs font-bold text-ink text-center">Administrasi & Layanan Bisnis</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
