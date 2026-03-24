import { ReactNode } from 'react';

export function Chapter({ eyebrow, title, body, children, id }: { eyebrow: string; title: string; body: string; children?: ReactNode; id?: string }) {
  return (
    <section className="chapter mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-6 py-20" id={id}>
      <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">{eyebrow}</p>
      <h2 className="text-4xl font-black leading-tight md:text-7xl">{title}</h2>
      <p className="max-w-2xl text-lg text-slate-300 md:text-2xl">{body}</p>
      {children}
    </section>
  );
}
