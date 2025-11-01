import { TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-copper to-purple-electric">
                falam por si
              </span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Transformamos desafios em oportunidades através de IA aplicada e automação inteligente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-copper transition-all duration-500 hover:shadow-[0_20px_50px_-10px_hsl(20_48%_54%/0.4)] animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <Icon className="text-copper group-hover:text-purple-electric transition-colors duration-300" size={40} />
                  </div>
                  <div className="text-5xl font-bold mb-2 text-gradient bg-gradient-to-r from-copper to-purple-electric bg-clip-text text-transparent">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-primary-foreground">
                    {result.label}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {result.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto animate-fade-in">
            <div className="p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <p className="text-xl italic text-primary-foreground/90 mb-6">
                "A Acaus transformou completamente nossa operação. A automação de atendimento com IA
                não só economizou tempo, mas também melhorou significativamente a experiência dos
                nossos clientes."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-copper-purple" />
                <div className="text-left">
                  <div className="font-semibold text-primary-foreground">João Silva</div>
                  <div className="text-sm text-primary-foreground/70">CEO, TechStart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
