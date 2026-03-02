export default function ProjectCard({ project }) {
  const imageSrc =
    typeof project.image === "object"
      ? Object.values(project.image)[0]
      : project.image;
  return (
    <a
      href={project.link}
      target="black"
      className="group rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-emerald-500/50"
    >
      <div className="mb-4 h-40 cursor-pointer overflow-hidden rounded-lg bg-slate-700">
        <img className="h-full w-full" src={imageSrc} alt="image" />
      </div>
      <h3 className="mb-2 text-xl font-bold group-hover:text-emerald-400">
        {project.title}
      </h3>
      <p className="mb-4 text-sm text-gray-400">{project.desc}</p>
      <div className="flex gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
