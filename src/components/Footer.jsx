export default function Footer({ data }) {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6">
        <div className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
          {data.name}
        </div>

        <p className="text-center text-sm text-gray-500">
          {data.copy} <span className="text-gray-300">@{data.name}</span>.{" "}
          {data.rights}.
        </p>

        <div className="mt-2 flex gap-6">
          <a
            href="https://github.com"
            target="black"
            className="text-xs tracking-widest text-gray-600 uppercase transition-colors hover:text-emerald-400"
          >
            Github
          </a>
          <a
            href="https://www.line.me/ja"
            target="black"
            className="text-xs tracking-widest text-gray-600 uppercase transition-colors hover:text-emerald-400"
          >
            Line
          </a>
          <a
            href="https://www.facebook.com1"
            target="black"
            className="text-xs tracking-widest text-gray-600 uppercase transition-colors hover:text-emerald-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
