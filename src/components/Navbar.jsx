export default function Navbar({ lang, setLang, navData }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/90 py-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1 className="text-xl font-bold text-emerald-400">
          <a href="/">MyDev.</a>
        </h1>
        <div className="space-x-6 text-sm tracking-widest uppercase">
          <a href="#about" className="transition hover:text-emerald-400">
            {navData.about}
          </a>
          <a href="#projects" className="transition hover:text-emerald-400">
            {navData.projects}
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            {navData.contact}
          </a>
        </div>
        <div className="flex gap-2 rounded-lg bg-slate-800 p-1">
          <button
            onClick={() => setLang("en")}
            className={`rounded px-3 py-1 ${lang === "en" ? "bg-emerald-500" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("jp")}
            className={`rounded px-3 py-1 ${lang === "jp" ? "bg-emerald-500" : ""}`}
          >
            JP
          </button>
        </div>
      </div>
    </nav>
  );
}
