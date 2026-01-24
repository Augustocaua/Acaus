import { Crown, Target, Zap, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const Differentials = () => {
  const differentials = [
    {
      icon: Crown,
      title: "Design Estratégico",
      description: "Não fazemos apenas bonito. Criamos layouts pensados para posicionamento de marca e conversão.",
    },
    {
      icon: Target,
      title: "Soluções Sob Medida",
      description: "Cada projeto é único. Desenvolvemos estratégias personalizadas para a necessidade do seu negócio.",
    },
    {
      icon: Zap,
      title: "Tecnologia & Criatividade",
      description: "A união perfeita entre a inovação da IA e a sensibilidade do design humano.",
    },
    {
      icon: Rocket,
      title: "Foco em Resultado",
      description: "Beleza sem performance é apenas arte. Nossos projetos são feitos para gerar crescimento.",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0}>
            <div className="mb-16 md:text-center">
              <span className="text-copper text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Por Que a ACAUS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Mais do que uma agência, <br/>
                <span className="text-muted-foreground">seu braço direito em inovação.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={index * 100}>
                  <div className="group space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-300">
                      <Icon className="text-copper" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
