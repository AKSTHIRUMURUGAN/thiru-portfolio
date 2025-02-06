export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">A.K.S. Thirumurugan</h1>
        <p className="text-2xl mb-8">Fullstack Web Developer</p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
        >
          Get in Touch
        </a>
      </div>
      <div className="absolute inset-0 glow"></div>
    </section>
  )
}

