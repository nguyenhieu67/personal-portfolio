import ProjectCard from "../components/ProjectCard";

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-20">
      <h2 className="mb-10 flex items-center gap-4 text-3xl font-bold">
        {data.title} <div className="h-px flex-1 bg-slate-700"></div>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
