'use client';

import { useEffect, useRef } from 'react';

export function GlitchCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let frame = 0;
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(360, window.innerHeight * 0.8);
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      context.clearRect(0, 0, width, height);

      context.fillStyle = '#05070f';
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < 20; i += 1) {
        context.fillStyle = `rgba(255,255,255,${Math.random() * 0.06})`;
        context.fillRect(0, Math.random() * height, width, 1);
      }

      const baseSize = Math.min(120, width * 0.1);
      const text = 'HIRING IS BROKEN.';
      context.font = `900 ${baseSize}px Inter, system-ui, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      const jitter = active ? Math.sin(frame / 8) * 6 : 0;
      context.fillStyle = 'rgba(255, 40, 80, 0.82)';
      context.fillText(text, width / 2 + 8 + jitter, height / 2 - 8);
      context.fillStyle = 'rgba(80, 120, 255, 0.82)';
      context.fillText(text, width / 2 - 8 - jitter, height / 2 + 8);
      context.fillStyle = '#f8faff';
      context.fillText(text, width / 2, height / 2);

      if (active && Math.random() > 0.75) {
        const sliceY = Math.random() * height;
        const sliceHeight = 12 + Math.random() * 36;
        const offset = (Math.random() - 0.5) * 50;
        const imageData = context.getImageData(0, sliceY, width, sliceHeight);
        context.putImageData(imageData, offset, sliceY);
      }

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  return <canvas aria-label="Glitch headline animation" className="h-[70vh] w-full rounded-2xl border border-white/10" ref={canvasRef} />;
}
