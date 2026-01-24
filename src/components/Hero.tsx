import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover object-center sm:object-center"
        >
          <source src="/video logo.mp4" type="video/mp4" />
          {/* Fallback text/image for older browsers */}
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay - Gradient/Dark to ensure readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center relative w-full h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          <Reveal delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Design, Tecnologia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                & Inovação.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md px-2">
              Transformamos ideias em experiências digitais de alto impacto. <br className="hidden md:block" />
              Branding, design e tecnologia para marcas que buscam o extraordinário.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 w-full max-w-md mx-auto sm:max-w-none">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto bg-copper hover:bg-copper-dark text-white rounded-full px-8 sm:px-10 py-6 sm:py-8 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(193,103,55,0.3)] hover:shadow-[0_0_30px_rgba(193,103,55,0.5)] border border-transparent"
              >
                Solicitar Projeto
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full px-8 sm:px-10 py-6 sm:py-8 text-base sm:text-lg backdrop-blur-sm transition-all duration-300"
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
