import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'House Rules', id: 'house-rules' },
  { label: 'Corfu', id: 'corfu' },
  { label: 'FAQ', id: 'faq' },
];

export default function Navigation({ site }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-serif text-white tracking-[0.22em] uppercase text-lg hover:text-gold transition-colors duration-300"
        >
          {site.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="relative text-white/85 hover:text-gold transition-colors duration-300 text-xs tracking-[0.18em] uppercase font-light group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[5px]' : 'mb-[5px]'
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : 'mb-[5px]'
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-navy/97 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="block w-full text-left px-8 py-4 text-white/80 hover:text-gold hover:bg-white/5 transition-colors text-xs tracking-[0.2em] uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
