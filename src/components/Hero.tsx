import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/video logo.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay - Gradiente escuro vertical (0.5 - 0.6 opacidade) */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative h-full flex flex-col justify-center min-h-[100svh]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto md:mx-0 space-y-6 md:space-y-8">
          
          <Reveal delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Design, Tecnologia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                & Inovação.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Transformamos ideias em experiências digitais de alto impacto. <br className="hidden md:block" />
              Branding, design e tecnologia para marcas que buscam o extraordinário.
            </p>
          </Reveal>

          <Reveal delay={400} className="w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-6">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full md:w-auto bg-copper hover:bg-copper-dark text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(193,103,55,0.3)] hover:shadow-[0_0_30px_rgba(193,103,55,0.5)] border border-transparent"
              >
                Solicitar Projeto
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Reveal>

        </div>
      </div>
      
      {/* Scroll Indicator */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
