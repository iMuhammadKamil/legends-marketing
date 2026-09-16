import Sidebar from "@/components/layout/Sidebar/Sidebar";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="project-layout">
      <Sidebar />
      <article>{children}</article>
    </div>
  );
}