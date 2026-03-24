'use client';

import { useMemo, useState } from 'react';
import type { IdentityType } from './IdentitySelect';
import { CTAButton } from './CTAButton';

type Props = {
  identity: IdentityType;
};

export function WaitlistForm({ identity }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [field, setField] = useState('Technology');
  const [role, setRole] = useState('Hiring Manager');

  const options = useMemo(
    () => ({
      talent: ['Technology', 'Design', 'Finance', 'Healthcare', 'Marketing', 'Legal', 'Education', 'Operations', 'Other'],
      employer: ['Hiring Manager', 'Recruiter', 'Founder', 'Other']
    }),
    []
  );

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-300/40 bg-emerald-500/10 p-8">
        <h3 className="text-3xl font-black">YOU&apos;VE CROSSED OVER.</h3>
        <p className="mt-4 text-slate-200">You&apos;re now inside. You&apos;ll be informed the moment the system goes live.</p>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-emerald-200">The shift has already begun.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5 rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur" onSubmit={(event) => event.preventDefault()}>
      <input className="field" name="name" placeholder="Full Name" required />
      <input className="field" name="email" placeholder="Email Address" required type="email" />

      {identity === 'talent' ? (
        <>
          <select className="field" name="field" onChange={(event) => setField(event.target.value)} value={field}>
            {options.talent.map((entry) => (
              <option key={entry}>{entry}</option>
            ))}
          </select>
          {field === 'Other' && <input className="field" name="fieldOther" placeholder="Enter your field" required />}
        </>
      ) : (
        <>
          <input className="field" name="company" placeholder="Company Name" required />
          <select className="field" name="role" onChange={(event) => setRole(event.target.value)} value={role}>
            {options.employer.map((entry) => (
              <option key={entry}>{entry}</option>
            ))}
          </select>
          {role === 'Other' && <input className="field" name="roleOther" placeholder="Enter your role" required />}
        </>
      )}

      <div className="pt-3">
        <CTAButton onComplete={() => setSubmitted(true)} />
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-300">Step into the system</p>
      </div>
    </form>
  );
}
