import { Briefcase, CheckSquare } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-16 md:py-20 bg-canvas texture-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Pengalaman Praktik</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Pengalaman & Internship</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Garis vertikal */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-line" />

          <div className="space-y-6 pl-16">
            {experienceData.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Node */}
                <div className="absolute -left-11 top-5 w-10 h-10 rounded-2xl bg-surface border-2 border-accent flex items-center justify-center text-accent shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="bg-surface rounded-3xl border border-line p-6 hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-ink">{exp.role}</h3>
                      <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                    </div>
                    <span className="inline-block text-xs font-semibold text-accent bg-accent-muted border border-accent-ring px-3 py-1.5 rounded-xl shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 border-t border-line pt-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckSquare className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-body leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
