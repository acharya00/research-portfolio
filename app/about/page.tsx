<Image
  src="/profile.jpg"
  alt="Dilli Ram Acharya"
  width={300}
  height={300}
  className="rounded-full border-4 border-slate-700"
/>
export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-5xl font-bold mb-10">
        About Me
      </h1>

      <p className="text-lg leading-8 text-slate-300">
        I am an Agricultural Engineering researcher at Nanjing Agricultural
        University, China, with research interests spanning biochar and
        biomass-derived functional materials, electrochemical sensing,
        environmental monitoring, machine learning, and computational
        materials science.
      </p>

      <p className="text-lg leading-8 text-slate-300 mt-6">
        My current research focuses on developing nanobiochar-based
        electrochemical sensing platforms for environmental monitoring,
        pollutant detection, and sustainable agricultural applications.
      </p>
    </main>
  );
}