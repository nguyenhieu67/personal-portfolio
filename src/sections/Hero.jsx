export default function Hero({ data }) {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-26"
    >
      <span className="mb-4 rounded-full bg-emerald-500/10 px-4 py-1 text-xl font-medium text-emerald-400">
        {data.title}
      </span>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
        {data.name}
      </h1>

      <p className="mb-12 max-w-lg text-center text-lg leading-relaxed text-gray-400">
        {data.role}
      </p>

      <div className="flex flex-col flex-wrap justify-center gap-6 text-gray-300 md:gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl text-emerald-400">{data.age.title}: </span>
          <span className="text-lg">{data.age.number}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl text-emerald-400">
            {data.address.title}:{" "}
          </span>
          <span className="text-lg">{data.address.string}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl text-emerald-400">
            {data.school.title}:{" "}
          </span>
          <span className="text-lg">{data.school.string}</span>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="#projects"
          className="group flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all hover:text-emerald-400"
        >
          {data.link}
          <span className="text-xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/20 bg-slate-800/20 p-8 transition-colors hover:border-emerald-500/50">
            <h3 className="mb-4 font-bold tracking-wider text-emerald-400">
              {data.analysis.strength.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {data.analysis.strength.desc}
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-slate-800/20 p-8 transition-colors hover:border-red-500/50">
            <h3 className="mb-4 font-bold tracking-wider text-red-400">
              {data.analysis.weakness.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {data.analysis.weakness.desc}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-linear-to-br from-slate-800/40 to-slate-900/40 p-8 transition-colors hover:border-blue-500/50">
          <h3 className="mb-4 flex items-center gap-2 font-bold tracking-wider text-blue-400">
            <span>🚀</span> {data.analysis.future.title}
          </h3>
          <p className="leading-relaxed text-gray-300">
            {data.analysis.future.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
