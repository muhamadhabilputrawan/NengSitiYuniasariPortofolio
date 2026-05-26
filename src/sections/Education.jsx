import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="pendidikan" className="py-16 md:py-20 bg-canvas texture-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Riwayat Pendidikan</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Pendidikan Formal</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-surface rounded-3xl border border-line p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{edu.school}</h3>
                    <p className="text-sm text-muted mt-0.5">{edu.major}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-muted border border-accent-ring text-accent text-xs font-semibold shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
              </div>

              <div className="border-t border-line pt-5 space-y-3">
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-body leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
