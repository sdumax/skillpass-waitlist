'use client';

import { motion } from 'framer-motion';

const phases = ['JOIN THE WAITLIST →', 'INITIALIZING', 'ACCESS GRANTED'];

export function CTAButton({ onComplete, disabled }: { onComplete: () => void; disabled?: boolean }) {
  const runSequence = async () => {
    if (disabled) return;
    for (let i = 0; i < phases.length; i += 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    onComplete();
  };

  return (
    <motion.button
      className="group relative overflow-hidden rounded-full border border-cyan-200/40 bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-violet-400/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em]"
      disabled={disabled}
      onClick={runSequence}
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        animate={{ opacity: [0.8, 1, 0.8] }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_45%)]"
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="relative">{phases[0]}</span>
    </motion.button>
  );
}
