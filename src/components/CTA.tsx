import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Instagram, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-vibrant/5 to-copper/10 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pronto para elevar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                sua marca?
              </span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Não deixe para depois o futuro do seu negócio. 
              Entre em contato e descubra como a ACAUS pode transformar sua visão em resultado.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild
                size="lg" 
                className="bg-copper hover:bg-copper-dark text-white rounded-full px-10 py-8 text-lg shadow-lg hover:shadow-copper/25 transition-all duration-300"
              >
                <a 
                  href="https://wa.me/557182875822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Falar no WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </Reveal>
          
          {/* Direct Contacts */}
          <Reveal delay={600}>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground/80 uppercase tracking-widest">
              <a
                href="mailto:acausvision@gmail.com"
                className="hover:text-copper transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                acausvision@gmail.com
              </a>
              <a
                href="https://www.instagram.com/acausvision/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors flex items-center gap-2"
              >
                <Instagram size={16} />
                @acausvision
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
