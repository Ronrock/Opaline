import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone/40 last:border-0">
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-6 group"
        onClick={onToggle}
      >
        <span className="font-serif text-navy text-lg font-light group-hover:text-navy/70 transition-colors pr-4">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 border border-gold/50 flex items-center justify-center text-gold text-xs transition-transform duration-300 mt-0.5 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#6b6b6b] leading-relaxed font-light text-base pr-10">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ({ faq, site }) {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useInView();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-cream-dark py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">{faq.sectionLabel}</p>
          <div className="section-divider" />
          <h2 className="font-serif text-navy text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-5">
            {faq.heading}
          </h2>
          <p className="text-[#6b6b6b] font-light leading-relaxed max-w-lg mx-auto">
            {faq.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white border border-stone/40 px-8 animate-on-scroll">
          {faq.faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Contact nudge */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-[#6b6b6b] font-light mb-1">{faq.contactLabel}</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block text-gold hover:text-gold-dark transition-colors font-serif italic text-lg"
          >
            {site.email}
          </a>
        </div>

      </div>
    </section>
  );
}
