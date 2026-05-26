import { Shield, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/portfolioData';

export default function Organization() {
  return (
    <section id="organisasi" className="py-16 md:py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Organisasi</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Pengalaman Organisasi</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="space-y-5">
          {organizationData.map((org, i) => (
            <div key={i} className="bg-canvas rounded-3xl border border-line p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">

                {/* Ikon */}
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                  <Shield className="w-7 h-7" />
                </div>

                {/* Konten */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-ink">{org.organization}</h3>
                    <span className="text-xs font-semibold text-accent bg-accent-muted border border-accent-ring px-3 py-1 rounded-full">
                      Aktif
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-5">{org.role}</p>

                  <div className="border-t border-line pt-5 space-y-3">
                    <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-3">
                      Tanggung Jawab
                    </p>
                    {org.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-body leading-relaxed">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
