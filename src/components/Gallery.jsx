import { useState, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';
import { withBase } from '@/lib/basePath';

export default function Gallery({ gallery }) {
  const ref = useInView();
  const [lightbox, setLightbox] = useState(null);

  // Group photos by category
  const photosByCategory = useMemo(() => {
    const grouped = {};
    gallery.photos.forEach(photo => {
      const category = photo.category || 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(photo);
    });
    return grouped;
  }, [gallery.photos]);

  return (
    <section id="gallery" className="bg-cream-dark py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">{gallery.sectionLabel}</p>
          <div className="section-divider" />
          <h2 className="font-serif text-navy text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
            {gallery.heading}
          </h2>
        </div>

        {/* Categories with Grids */}
        {Object.entries(photosByCategory).map(([category, photos], categoryIndex) => (
          <div key={category} className={categoryIndex > 0 ? 'mt-16' : ''}>
            {/* Category Header */}
            <div className="text-center mb-8 animate-on-scroll">
              <h3 className="font-serif text-navy text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
                {category}
              </h3>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="block h-px w-12 bg-gold/40" />
                <span className="text-gold/60 text-sm">✦</span>
                <span className="block h-px w-12 bg-gold/40" />
              </div>
            </div>

            {/* Grid for this category */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-on-scroll mb-8">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  className={`gallery-item overflow-hidden ${photo.span} group`}
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={withBase(photo.src)}
                    alt={photo.alt}
                    className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={withBase(lightbox.src)}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/50 text-sm tracking-widest uppercase">
            {lightbox.alt}
          </p>
        </div>
      )}
    </section>
  );
}
