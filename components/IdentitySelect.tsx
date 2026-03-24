'use client';

import clsx from 'clsx';

export type IdentityType = 'talent' | 'employer';

export function IdentitySelect({ value, onSelect }: { value: IdentityType | null; onSelect: (value: IdentityType) => void }) {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center gap-8 px-6 py-20">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80">Identity lock</p>
      <h2 className="text-4xl font-black md:text-7xl">WHO ARE YOU?</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <button
          className={clsx(
            'rounded-2xl border px-6 py-6 text-left transition duration-300',
            value === 'talent' ? 'border-cyan-300 bg-cyan-500/10 shadow-glow' : 'border-white/20 hover:border-cyan-300/70'
          )}
          disabled={Boolean(value)}
          onClick={() => onSelect('talent')}
          type="button"
        >
          <h3 className="text-2xl font-bold">Talent</h3>
          <p className="mt-2 text-slate-300">I want to prove what I can actually do.</p>
        </button>

        <button
          className={clsx(
            'rounded-2xl border px-6 py-6 text-left transition duration-300',
            value === 'employer' ? 'border-violet-300 bg-violet-500/10 shadow-glow' : 'border-white/20 hover:border-violet-300/70'
          )}
          disabled={Boolean(value)}
          onClick={() => onSelect('employer')}
          type="button"
        >
          <h3 className="text-2xl font-bold">Employer</h3>
          <p className="mt-2 text-slate-300">I want signal, not noise.</p>
        </button>
      </div>
    </section>
  );
}
