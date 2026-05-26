import { Mail, MapPin, Phone, Keyboard, Award } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Tentang Saya</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
            Kenali Profil Saya
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Kiri: Biografi */}
          <div className="space-y-6">
            <p className="text-base text-body leading-relaxed">
              Saya siswi <strong className="text-ink font-semibold">SMK Wikrama Bogor</strong> jurusan
              Manajemen Perkantoran dan Layanan Bisnis dengan kompetensi kuat dalam administrasi
              perkantoran, pengelolaan dokumen, pelayanan pelanggan, dan pengolahan data.
            </p>
            <p className="text-base text-body leading-relaxed">
              Saya memiliki pengalaman nyata melalui program{' '}
              <strong className="text-ink font-semibold">Teaching Factory (TEFA)</strong> — mulai dari
              layanan transaksi Agen BNI 46, kegiatan administrasi sekolah, hingga pengoperasian
              Microsoft Office dan Google Workspace secara terampil.
            </p>

            {/* Pencapaian */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-subtle uppercase tracking-wider">Pencapaian</p>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-canvas border border-line">
                <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center text-accent shrink-0">
                  <Keyboard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Sertifikat Mengetik — Kategori Gold</p>
                  <p className="text-xs text-muted mt-0.5">10 Jari Cepat & Akurat</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-canvas border border-line">
                <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center text-accent shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Sertifikat Marketing — MySkill</p>
                  <p className="text-xs text-muted mt-0.5">Dasar Pemasaran & Strategi Digital</p>
                </div>
              </div>
            </div>

            {/* Minat karir */}
            <div>
              <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-3">
                Tertarik berkarir sebagai:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Staf Administrasi', 'Customer Service', 'Receptionist'].map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kanan: Kontak */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-4">Kontak & Profil</p>

            <a href="mailto:sitiyuniasari247@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-canvas hover:border-accent hover:bg-accent-muted transition-all group">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-subtle uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors break-all">
                  sitiyuniasari247@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-canvas">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-muted shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-subtle uppercase tracking-wider">Lokasi</p>
                <p className="text-sm font-medium text-ink">Cisarua, Kab. Bogor, Jawa Barat</p>
              </div>
            </div>

            <a href="tel:087834016813"
              className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-canvas hover:border-accent hover:bg-accent-muted transition-all group">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-subtle uppercase tracking-wider">Telepon</p>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">0878-3401-6813</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/nengsitiyuniasari" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-canvas hover:border-accent hover:bg-accent-muted transition-all group">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-subtle uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">nengsitiyuniasari</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
