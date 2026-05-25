const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'House Rules', id: 'house-rules' },
  { label: 'Corfu', id: 'corfu' },
  { label: 'FAQ', id: 'faq' },
];

export default function Footer({ site }) {
  return (
    <footer className="bg-navy-dark border-t border-white/5">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo('hero')}
              className="font-serif text-white text-2xl tracking-[0.2em] uppercase mb-4 block hover:text-gold transition-colors"
            >
              {site.name}
            </button>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              {site.footerBlurb}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label text-gold/60 mb-6">Navigation</p>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/50 hover:text-gold transition-colors text-sm tracking-wide font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label text-gold/60 mb-6">Contact</p>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Location</p>
                <p>{site.locationCity}<br />{site.locationCountry}</p>
              </li>
              <li>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Bookings</p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {site.bookingLabel}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs tracking-[0.12em]">
          <p>© {new Date().getFullYear()} {site.copyrightName}</p>
          <p className="font-serif italic text-white/15">{site.tagline}</p>
        </div>
      </div>

    </footer>
  );
}
