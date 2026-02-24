import { Monitor, Bot, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Monitor,
      title: "Desenvolvimento Web",
      description:
        "Sites institucionais e Landing Pages de alta performance, desenvolvidos com as tecnologias mais modernas do mercado.",
      color: "from-copper to-copper-dark",
      path: "/desenvolvimento-web",
    },
    {
      icon: Bot,
      title: "Inteligência Artificial",
      description:
        "Soluções de IA para atendimento automatizado e personalizado, elevando a experiência do seu cliente.",
      color: "from-purple-tech to-purple-vibrant",
      path: "/inteligencia-artificial",
    },
    {
      icon: Zap,
      title: "Automação & Estratégia",
      description:
        "Otimização de processos e integração de sistemas para escalar seu negócio com eficiência e dados.",
      color: "from-copper-dark to-purple-electric",
      path: "/automacao-estrategia",
    },
  ];

  return (
    <section id="servicos" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0}>
            <div className="text-center mb-16">
              <span className="text-copper text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                O Que Fazemos
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                Soluções completas para o seu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-purple-vibrant">
                  ecossistema digital.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} delay={index * 100}>
                  <button
                    type="button"
                    onClick={() => navigate(service.path)}
                    className="text-left w-full"
                  >
                    <Card
                      className="group p-10 h-full border border-white/5 bg-card/50 backdrop-blur-sm hover:border-copper/50 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(193,103,55,0.15)] relative overflow-hidden cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                          <Icon
                            className="text-copper group-hover:text-white transition-colors duration-300"
                            size={28}
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-copper transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </div>
                    </Card>
                  </button>
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
