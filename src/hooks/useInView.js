import { useEffect, useRef } from 'react';

export function useInView(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element and all its animate-on-scroll children
    const targets = el.querySelectorAll('.animate-on-scroll');
    if (el.classList.contains('animate-on-scroll')) {
      observer.observe(el);
    }
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
