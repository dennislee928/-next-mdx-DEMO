"use client";
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }) {
  const ref = useRef(null);
  const [id] = useState(
    `mermaid-${Math.random().toString(36).substring(2, 11)}`
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!ref.current || !chart) return;

      try {
        // 初始化 mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
          logLevel: "error",
        });

        // 清除之前的內容
        ref.current.innerHTML = "";
        setError(null);

        // 渲染圖表
        const { svg } = await mermaid.render(id, chart);
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid 渲染錯誤:", err);
        setError(err.message);
        if (ref.current) {
          ref.current.innerHTML = `<div style="color:red; padding: 10px; border: 1px solid red; border-radius: 4px;">
            <p>圖表渲染錯誤:</p>
            <pre>${err.message}</pre>
          </div>`;
        }
      }
    };

    renderChart();
  }, [chart, id]);

  return (
    <div className="mermaid-wrapper">
      <div ref={ref} />
      {error && <div className="sr-only">錯誤: {error}</div>}
    </div>
  );
}
