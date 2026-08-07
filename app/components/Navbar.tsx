export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">
          Dilli Ram Acharya
        </h1>

        <div className="flex gap-6 text-slate-300">
          <a href="/">Home</a>
          <a href="/research">Research</a>
          <a href="/publications">Publications</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}