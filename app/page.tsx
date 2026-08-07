export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="relative overflow-hidden rounded-xl border border-gray-200">
          <img
            src="/profile.jpg"
            alt="Dilli Ram Acharya"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold">Dilli Ram Acharya</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to my portfolio. I specialize in research, software development, 
            and data analysis.
          </p>
        </div>
      </div>
    </main>
  );
}