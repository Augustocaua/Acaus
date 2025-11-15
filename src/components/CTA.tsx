import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Instagram, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-cream-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-12 md:p-16 text-center shadow-2xl animate-fade-in">
            <div className="absolute inset-0 bg-black/40" />
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
            <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full" />
            
            <div className="relative z-10 space-y-6">
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 rounded-full text-primary-foreground mb-4">
                  <MessageSquare size={16} />
                  <span className="text-sm font-medium">Fale conosco agora</span>
                </div>
              </Reveal>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Pronto para automatizar o seu negócio?
              </h2>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Entre em contato e descubra como a Acaus pode levar sua empresa para o próximo nível
                com inteligência artificial e automação.
              </p>
              
              <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Pronto para automatizar o seu negócio?
                </h2>
              </Reveal>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="group bg-primary-foreground text-purple-tech hover:bg-primary-foreground/90">
                  Falar com Especialista
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button variant="glass" size="lg">
                  Agendar Demonstração
                </Button>
              </div>
              
              {/* Contact Options */}
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-primary-foreground/80">
                  <a
                    href="https://wa.me/557182875822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <MessageSquare size={18} />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-primary-foreground/40">|</span>
                  <a
                    href="https://www.instagram.com/acausvision/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <Instagram size={18} />
                    <span>@acausvision</span>
                  </a>
                  <span className="text-primary-foreground/40">|</span>
                
                  <a
                    href="mailto:acausvision@gmail.com"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <Mail size={18} />
                    <span>acausvision@gmail.com</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
