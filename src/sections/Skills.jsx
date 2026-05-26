import { ShieldCheck, Monitor, Users, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="keahlian" className="py-16 md:py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium text-accent mb-2">Kompetensi</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Keahlian Profesional</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Hard Skills */}
          <div className="bg-canvas rounded-3xl border border-line p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">Hard Skills</h3>
                <p className="text-xs text-muted">Keahlian Teknis</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {skillsData.hardSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2.5 py-2 px-3 rounded-xl hover:bg-surface transition-colors group">
                  <div className="w-5 h-5 rounded-full bg-accent-muted flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-body">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div className="bg-canvas rounded-3xl border border-line p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">Software Skills</h3>
                <p className="text-xs text-muted">Perangkat Produktivitas</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {skillsData.softwareSkills.map((soft, i) => (
                <div key={i} className="flex justify-between items-center bg-surface rounded-xl px-4 py-3 border border-line">
                  <span className="text-sm font-medium text-ink">{soft.name}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    soft.level === 'Advanced'
                      ? 'bg-accent text-white'
                      : 'bg-surface-2 text-muted border border-line'
                  }`}>
                    {soft.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-canvas rounded-3xl border border-line p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">Soft Skills</h3>
                <p className="text-xs text-muted">Karakter & Etos Kerja</p>
              </div>
            </div>
            <div className="space-y-3">
              {skillsData.softSkills.map((item, i) => (
                <div key={i} className="bg-surface rounded-xl border border-line p-4">
                  <p className="text-sm font-semibold text-ink mb-1">{item.name}</p>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
