import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-copper/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0}>
            <span className="text-copper text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Quem Somos
            </span>
          </Reveal>
          
          <Reveal delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Acreditamos que o design estratégico e a tecnologia são a base para o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                crescimento exponencial.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                A ACAUS é um estúdio de soluções digitais focado em branding, design e tecnologia de alto padrão.
                Nascemos para desafiar o comum, entregando projetos que unem estética apurada e performance real.
              </p>
              <p>
                Nosso propósito é claro: transformar a presença digital de empresas ambiciosas, 
                criando narrativas visuais únicas e produtos tecnológicos que não apenas funcionam, 
                mas que definem o posicionamento de mercado de nossos clientes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
