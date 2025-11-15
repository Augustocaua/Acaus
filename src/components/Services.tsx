import { Bot, Megaphone, BarChart3, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "IA de Atendimento e Disparos",
      description:
        "IA que Atua, Responde e Gera Resultados. Mais que um chatbot — um agente inteligente que interage, qualifica leads e dispara mensagens estratégicas, criando experiências automatizadas e humanas.",
      color: "from-purple-vibrant to-purple-electric",
    },
    {
      icon: Megaphone,
      title: "Automação Inteligente",
      description:
        "Otimização automática de campanhas, análise preditiva de desempenho e gestão inteligente de anúncios.",
      color: "from-copper to-copper-dark",
    },
    {
      icon: BarChart3,
      title: "Dashboards e Métricas Inteligentes",
      description:
        "Visualização de dados em tempo real com insights automáticos para decisões mais rápidas e assertivas.",
      color: "from-purple-tech to-purple-vibrant",
    },
    {
      icon: Network,
      title: "Integração de Sistemas Empresariais",
      description:
        "Conectamos suas ferramentas e processos em um ecossistema integrado e automatizado.",
      color: "from-copper-dark to-purple-electric",
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} delay={index * 100}>
                  <Card
                    className="group p-8 border-border hover:border-copper transition-all duration-500 hover:shadow-[0_20px_50px_-10px_hsl(20_48%_54%/0.3)] overflow-hidden relative"
                  >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-copper-purple flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-copper transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  </Card>
                 </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
