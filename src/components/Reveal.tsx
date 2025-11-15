import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number; // ms
  duration?: number; // ms
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  once = true,
  threshold = 0.1,
  rootMargin = "0px",
  delay = 0,
  duration = 600,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  // Remove a classe de duração fixa e controle via style
  const base = "opacity-0 translate-y-4 transition-all ease-out will-change-transform";
  const active = "opacity-100 translate-y-0";

  return (
    <div
      ref={ref}
      className={[base, visible ? active : "", className].join(" ")}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;