import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function CorfuRecommendations({ corfu }) {
  const [activeTab, setActiveTab] = useState(corfu.categories[0].name);
  const ref = useInView();

  const activeCategory = corfu.categories.find((c) => c.name === activeTab);

  return (
    <section id="corfu" className="bg-cream py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">{corfu.sectionLabel}</p>
          <div className="section-divider" />
          <h2 className="font-serif text-navy text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-5">
            {corfu.heading}
          </h2>
          <p className="text-[#6b6b6b] max-w-xl mx-auto font-light leading-relaxed">
            {corfu.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12 animate-on-scroll flex-wrap">
          {corfu.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300 ${
                activeTab === cat.name
                  ? 'bg-navy text-white'
                  : 'text-navy/60 hover:text-navy border border-transparent hover:border-navy/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-stone/40 p-7 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="inline-block text-gold text-[0.6rem] tracking-[0.2em] uppercase font-medium border border-gold/30 px-2 py-0.5 mb-4">
                {item.tag}
              </span>
              <h3 className="font-serif text-navy text-xl font-light mb-1 group-hover:text-navy transition-colors">
                {item.name}
              </h3>
              <p className="text-[#6b6b6b] text-xs tracking-widest uppercase mb-4 font-light">
                {item.distance}
              </p>
              <div className="w-6 h-px bg-gold/40 mb-4 group-hover:w-10 transition-all duration-300" />
              <p className="text-[#6b6b6b] text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Decorative map note */}
        <p className="text-center text-[#6b6b6b]/50 text-xs tracking-[0.15em] uppercase mt-12 animate-on-scroll">
          {corfu.footerNote}
        </p>

      </div>
    </section>
  );
}
