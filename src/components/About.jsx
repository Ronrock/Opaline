import { useInView } from '@/hooks/useInView';

export default function About({ about }) {
  const ref = useInView();

  return (
    <section id="about" className="bg-cream py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label mb-4">{about.sectionLabel}</p>
          <div className="section-divider" />
          <h2 className="font-serif text-navy text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6">
            {about.heading}
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed text-base md:text-lg font-light">
            {about.description}
          </p>
        </div>

        {/* Image + text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="animate-on-scroll relative">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 hidden md:block" />
          </div>

          <div className="animate-on-scroll delay-2">
            <p className="section-label mb-4">{about.interiorsLabel}</p>
            <h3 className="font-serif text-navy text-3xl md:text-4xl font-light tracking-wide mb-5">
              {about.interiorsHeadingLine1}<br /><em>{about.interiorsHeadingLine2}</em>
            </h3>
            <div className="w-10 h-px bg-gold mb-6" />
            {about.interiorsBody.map((para, i) => (
              <p key={i} className={`text-[#6b6b6b] leading-relaxed font-light${i < about.interiorsBody.length - 1 ? ' mb-5' : ''}`}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone/40 border border-stone/40">
          {about.features.map((f, i) => (
            <div
              key={f.label}
              className={`bg-cream p-6 md:p-8 text-center animate-on-scroll delay-${(i % 4) + 1}`}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <p className="font-serif text-navy text-lg font-light mb-1">{f.label}</p>
              <p className="text-[#6b6b6b] text-xs font-light tracking-wide">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
