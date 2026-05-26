import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, User, AlertCircle } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';

const CONTACTS = [
  {
    href: null,
    label: 'Email',
    value: 'sitiyuniasari247@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    href: 'https://wa.me/6287834016813',
    label: 'WhatsApp',
    value: '0878-3401-6813',
    icon: <Phone className="w-5 h-5" />,
  },
  {
    href: 'https://www.linkedin.com/in/nengsitiyuniasari',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nengsitiyuniasari',
    icon: <LinkedinIcon className="w-5 h-5" />,
  },
  {
    href: 'https://www.instagram.com/yusshine_/',
    label: 'Instagram',
    value: '@yusshine_',
    icon: <User className="w-5 h-5" />,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'ba77485a-244a-4ba7-8620-75e7739c0acd',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Pesan dari ${form.name} — Portfolio Siti Yuniasari`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="kontak" className="py-16 md:py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Hubungi Saya</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Mari Terhubung</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Kontak langsung */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-base text-body leading-relaxed mb-6">
              Punya peluang karir atau ingin berdiskusi? Saya terbuka untuk kesempatan baru.
              Hubungi saya melalui salah satu kanal berikut.
            </p>

            {CONTACTS.map(({ href, label, value, icon }) => {
              const baseClass = "flex items-center gap-4 p-4 bg-canvas rounded-2xl border border-line transition-all group";
              const inner = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-surface-2 flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                    {icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-semibold text-subtle uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium text-ink group-hover:text-accent truncate transition-colors">{value}</p>
                  </div>
                </>
              );

              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className={`${baseClass} hover:border-accent hover:bg-accent-muted cursor-pointer`}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={`${baseClass} cursor-default select-text`}>
                  {inner}
                </div>
              );
            })}

            <div className="mt-4 p-6 bg-dark-panel rounded-2xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Etos Kerja</p>
              <p className="text-sm text-dark-text/80 leading-relaxed italic">
                "Memberikan kontribusi terbaik, menjaga ketelitian administrasi, dan selalu siap
                melayani dengan pelayanan prima yang tulus."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-canvas rounded-3xl border border-line p-8">
            <p className="text-sm font-bold text-ink mb-6">Kirim Pesan Langsung</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-ink">Nama Lengkap</label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange} required
                    placeholder="Nama Anda"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-line bg-surface text-ink placeholder:text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-ink">Email</label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange} required
                    placeholder="nama@email.com"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-line bg-surface text-ink placeholder:text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-ink">Pesan</label>
                <textarea
                  id="message" name="message" rows={5}
                  value={form.message} onChange={handleChange} required
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full text-sm px-4 py-3 rounded-xl border border-line bg-surface text-ink placeholder:text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-line gap-4">
                {/* Status feedback */}
                <div className="text-sm">
                  {status === 'success' && (
                    <span className="flex items-center gap-2 font-medium text-emerald-600">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      Pesan terkirim! Terima kasih.
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="flex items-center gap-2 font-medium text-red-500">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Gagal mengirim. Coba lagi.
                    </span>
                  )}
                  {(status === 'idle' || status === 'submitting') && (
                    <span className="text-xs text-subtle">Semua kolom wajib diisi.</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
