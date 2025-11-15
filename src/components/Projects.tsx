import { TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const Projects = () => {
  const results = [
    {
      icon: TrendingUp,
      value: "+340%",
      label: "Aumento em conversões",
      description: "Com automação de funil de vendas",
    },
    {
      icon: Users,
      value: "10k+",
      label: "Leads qualificados",
      description: "Gerados por IA mensalmente",
    },
    {
      icon: Clock,
      value: "15h/dia",
      label: "Economizadas",
      description: "Em processos manuais",
    },
    {
      icon: CheckCircle2,
      value: "98%",
      label: "Taxa de precisão",
      description: "Em análises preditivas",
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-dark-bg text-primary-foreground relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-dark animate-glow" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-dark animate-glow delay-500" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-dark animate-glow delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Resultados que{" "}
                <span className="text-primary-foreground">falam por si</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Transformamos desafios em oportunidades através de IA aplicada e automação inteligente.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Reveal key={index} delay={index * 100} duration={1200}>
                  <div
                    className="group p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-copper transition-all duration-500 hover:shadow-[0_20px_50px_-10px_hsl(20_48%_54%/0.4)]"
                  >
                    <div className="mb-6">
                      <Icon className="text-copper group-hover:text-purple-electric transition-colors duration-300" size={40} />
                    </div>
                    <div className="text-5xl font-bold mb-2 text-primary-foreground">{result.value}</div>
                    <div className="text-lg font-semibold mb-2 text-primary-foreground">{result.label}</div>
                    <div className="text-sm text-primary-foreground/70">{result.description}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Testimonial Section */}
          <Reveal delay={100} duration={1200}>
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <p className="text-xl italic text-primary-foreground/90 mb-6">
                  "A Acaus transformou completamente nossa operação. A automação de atendimento com IA
                  não só economizou tempo, mas também melhorou significativamente a experiência dos
                  nossos clientes."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-copper" />
                  <div className="text-left">
                    <div className="font-semibold text-primary-foreground">João Silva</div>
                    <div className="text-sm text-primary-foreground/70">CEO, TechStart</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
