import { useEffect, useRef, useState } from "react";

export type RevealOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean; // reveal only once
};

export function useScrollReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const { rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true } = options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, visible } as const;
}