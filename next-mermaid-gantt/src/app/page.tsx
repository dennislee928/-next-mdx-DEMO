import dynamic from "next/dynamic";

const Mermaid = dynamic(() => import("./components/mermaid"));

export default function GanttPage() {
  const chart = `
gantt
  title Next.js Project Timeline
  dateFormat  YYYY-MM-DD
  excludes    weekends

  section Planning
  Initial Setup        :done, a1, 2025-04-01, 3d
  Requirements Gathering :a2, after a1, 5d

  section Development
  Setup Project        :a3, after a2, 4d
  Implement Features   :a4, after a3, 8d
  Internal Review      :a5, after a4, 2d

  section Testing
  Unit Tests           :a6, after a5, 3d
  Bug Fixes            :a7, after a6, 2d
  Final Deployment     :a8, after a7, 1d
`;

  return (
    <div>
      <h1>Gantt Chart in Next.js</h1>
      <Mermaid chart={chart} />
    </div>
  );
}
