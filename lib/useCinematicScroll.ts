'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCinematicScroll() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.chapter');
    const animations = sections.map((section) =>
      gsap.fromTo(
        section,
        { opacity: 0.3, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: true
          }
        }
      )
    );

    return () => {
      animations.forEach((animation) => animation.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
