"use client";

import { useEffect, useState } from "react";

export function SplitText({ text, className }: { text: string; className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((letter, index) => (
        <span
          aria-hidden="true"
          className={`split-letter ${ready ? "is-visible" : ""}`}
          style={{ transitionDelay: `${index * 40}ms` }}
          key={`${letter}-${index}`}
        >
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </span>
  );
}

