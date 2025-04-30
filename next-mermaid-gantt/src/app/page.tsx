import dynamic from "next/dynamic";

const Mermaid = dynamic(() => import("./components/mermaid"), {
  ssr: true,
  loading: () => <div className="loading">圖表載入中...</div>,
});

export default function GanttPage() {
  const chart = `gantt
    title Next.js 專案時間線
    dateFormat YYYY-MM-DD
    excludes weekends

    section 規劃
    初始設置        :done, a1, 2025-04-01, 3d
    需求收集        :a2, after a1, 5d

    section 開發
    設置專案        :a3, after a2, 4d
    實現功能        :a4, after a3, 8d
    內部審查        :a5, after a4, 2d

    section 測試
    單元測試        :a6, after a5, 3d
    修復錯誤        :a7, after a6, 2d
    最終部署        :a8, after a7, 1d
  `;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Next.js 中的甘特圖</h1>
      <div className="border p-4 rounded shadow-sm bg-white">
        <Mermaid chart={chart} />
      </div>
    </div>
  );
}
