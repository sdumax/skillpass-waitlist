'use client';

import { useMemo, useState } from 'react';
import { Chapter } from '@/components/Chapter';
import { GlitchCanvas } from '@/components/GlitchCanvas';
import { IdentitySelect, IdentityType } from '@/components/IdentitySelect';
import { WaitlistForm } from '@/components/WaitlistForm';
import { useCinematicScroll } from '@/lib/useCinematicScroll';
import { useLenis } from '@/lib/useLenis';

export default function Home() {
  const [identity, setIdentity] = useState<IdentityType | null>(null);

  useLenis();
  useCinematicScroll();

  const chapterTwo = useMemo(() => {
    if (identity === 'employer') {
      return {
        title: "YOU'RE HIRING BLIND.",
        body: 'Resumes are unreliable. Interviews reward performance over competence. Great candidates are missed.'
      };
    }

    return {
      title: 'YOU WERE NEVER THE PROBLEM.',
      body: 'Resumes do not reflect ability. Bias filters you out early. Your real skills are never tested.'
    };
  }, [identity]);

  return (
    <main className="min-h-screen bg-night text-slate-50">
      <section className="chapter relative flex min-h-screen flex-col justify-center gap-8 overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,110,255,.25),transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
          <GlitchCanvas active />
          <p className="max-w-xl text-xl text-slate-300">The system was never built to see you.</p>
          <a className="ml-auto text-xs uppercase tracking-[0.35em] text-cyan-200" href="#identity">
            ENTER
          </a>
        </div>
      </section>

      <div id="identity">
        <IdentitySelect onSelect={setIdentity} value={identity} />
      </div>

      <Chapter body={chapterTwo.body} eyebrow="Chapter 02" title={chapterTwo.title} />

      <Chapter
        body="Verified Skills. Portable Skill Passport. Skill-first hiring decisions. Always-current proof of capability."
        eyebrow="Chapter 03"
        title="VERIFIED PROOF."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {['Verified Skills', 'Portable Skill Passport', 'Skill-First Hiring', 'Always Current'].map((item) => (
            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur" key={item}>
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter
        body={identity === 'employer' ? 'Hire with confidence.' : 'Get hired on merit.'}
        eyebrow="Chapter 04"
        title="ENTER THE NEW ERA."
      />

      {identity && (
        <Chapter body="The waitlist is your crossing moment." eyebrow="Final Chapter" title="STEP INTO THE SYSTEM.">
          <WaitlistForm identity={identity} />
        </Chapter>
      )}
    </main>
  );
}
