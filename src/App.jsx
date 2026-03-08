import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { data } from "./data";
import { useEffect, useState } from "react";

function App() {
  const saveLang = localStorage.getItem("myAppLang") || "jp";

  const [lang, setLang] = useState(saveLang);

  useEffect(() => {
    localStorage.setItem("myAppLang", lang);
  }, [lang]);

  const d = data[lang] || data["jp"];

  return (
    <div className="min-h-screen scroll-smooth bg-slate-900 text-slate-100">
      <header>
        <Navbar lang={lang} setLang={setLang} navData={d.nav} />
        <Hero data={d.hero} />
      </header>
      <main className="container mx-auto px-6">
        <Projects data={d.projects} />
        <Contact data={d.contact} />
      </main>
      <Footer data={d.footer} />
    </div>
  );
}

export default App;
