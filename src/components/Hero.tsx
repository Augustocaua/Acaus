import Reveal from "@/components/Reveal";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/bacgraund acaus.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center h-full w-full">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 w-full flex flex-col items-center">
          
          <Reveal delay={0} width="100%">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Tecnologia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                & Inovação.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200} width="100%">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-[90%] md:max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Transformamos ideias em experiências digitais de alto impacto. <br className="hidden md:block" />
              Branding, design e tecnologia para marcas que buscam o extraordinário.
            </p>
          </Reveal>

        </div>
      </div>
      
      {/* Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
