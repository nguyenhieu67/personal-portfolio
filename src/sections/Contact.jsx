export default function Contact({ data }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="mb-8 text-3xl font-bold text-white">{data.title}</h2>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder={data.namePlaceholder}
            className="rounded border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
          />
          <input
            type="email"
            placeholder={data.emailPlaceholder}
            className="rounded border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <textarea
          placeholder={data.messagePlaceholder}
          rows="5"
          className="rounded border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
        ></textarea>

        <button
          type="button"
          className="rounded bg-emerald-500 py-3 font-bold text-slate-900 transition-colors hover:bg-emerald-400"
        >
          {data.btn}
        </button>
      </form>

      <p className="mt-8 text-sm text-gray-500">
        {data.subTitle}
        {": "}
        <span className="text-emerald-400">
          nguyenduchieu05082000@gmail.com
        </span>
      </p>
    </section>
  );
}
