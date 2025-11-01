import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-copper/90 via-purple-tech/90 to-dark-bg/95" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-copper rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-electric rounded-full animate-glow" />
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-copper rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-electric rounded-full animate-glow delay-500" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 rounded-full text-primary-foreground mb-4">
            <Sparkles size={16} className="text-copper" />
            <span className="text-sm font-medium">Inovação em IA & Automação</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Automação Inteligente e IA que{" "}
            <span className="relative inline-block">
              <span className="relative z-10">transformam</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-copper/30 -rotate-1"></span>
            </span>{" "}
            negócios
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Soluções criadas para empreendedores que querem crescer com tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              Fale com a IA da Acaus
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="glass" size="lg">
              Conheça Nossas Soluções
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-foreground">100+</div>
              <div className="text-primary-foreground/80">Projetos Entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80">Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80">Suporte IA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
