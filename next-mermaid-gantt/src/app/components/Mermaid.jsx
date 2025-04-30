"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: false });
      try {
        mermaid.render("mermaid-chart", chart, (svgCode) => {
          ref.current.innerHTML = svgCode;
        });
      } catch (err) {
        ref.current.innerHTML = `<pre style="color:red;">${err.message}</pre>`;
      }
    }
  }, [chart]);

  return <div ref={ref} />;
}
