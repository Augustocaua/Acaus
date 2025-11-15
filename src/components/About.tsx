import { Brain, Heart, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA humanizada e estratégica para seu negócio crescer de forma inteligente.",
    },
    {
      icon: Heart,
      title: "Tecnologia Acessível",
      description: "Soluções pensadas para tornar a inovação acessível a empreendedores.",
    },
    {
      icon: Zap,
      title: "Automação Eficiente",
      description: "Processos otimizados que economizam tempo e aumentam resultados.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tornando a IA{" acessível, humana e estratégica "}
              <span className="text-primary-foreground">acessível, humana e estratégica</span>
            </h2> */}
            {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Na Acaus, acreditamos que a tecnologia deve servir às pessoas. Por isso, criamos
              soluções de inteligência artificial e automação que realmente fazem a diferença no
              dia a dia dos negócios.
            </p> */}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal
                  key={index}
                  delay={index * 100}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-copper transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(20_48%_54%/0.3)]"
                >
                  <div className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-copper transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
