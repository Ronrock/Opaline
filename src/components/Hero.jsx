import { useEffect, useState } from 'react';
import { withBase } from '@/lib/basePath';

export default function Hero({ hero, site }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={withBase(hero.image)}
        alt={site.name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/40 to-navy/80" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Overline */}
        <p className="section-label text-gold/80 mb-5 tracking-[0.35em]">
          {site.locationLabel}
        </p>

        {/* Title */}
        <h1 className="font-serif text-white font-light leading-none mb-6">
          <span className="block text-5xl sm:text-7xl md:text-8xl tracking-[0.12em]">
            {hero.titleLine1}
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl tracking-[0.18em] italic">
            {hero.titleLine2}
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="block h-px w-16 bg-gold/60" />
          <span className="text-gold text-lg">✦</span>
          <span className="block h-px w-16 bg-gold/60" />
        </div>

        {/* Tagline */}
        <p className="text-white/75 font-serif italic text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-10 max-w-xl mx-auto">
          {site.tagline}
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollTo(hero.ctaTarget)}
          className="inline-block border border-gold/60 text-white hover:bg-gold hover:border-gold hover:text-navy transition-all duration-400 text-xs tracking-[0.22em] uppercase px-10 py-4 font-light"
        >
          {hero.ctaText}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
