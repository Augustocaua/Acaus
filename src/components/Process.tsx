import Reveal from "@/components/Reveal";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Mergulhamos no seu negócio para entender dores, objetivos e oportunidades.",
    },
    {
      number: "02",
      title: "Estratégia",
      description: "Desenhamos o plano de ação, definindo tecnologias e caminhos visuais.",
    },
    {
      number: "03",
      title: "Criação",
      description: "Desenvolvimento ágil e colaborativo, onde a mágica visual e técnica acontece.",
    },
    {
      number: "04",
      title: "Entrega",
      description: "Lançamento e acompanhamento para garantir performance e resultados.",
    },
  ];

  return (
    <section id="processo" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0}>
            <div className="text-center mb-20">
              <span className="text-copper text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Metodologia
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                Como transformamos <br />
                <span className="text-muted-foreground">ideias em realidade.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="relative pt-8 md:pt-0">
                  <div className="text-6xl font-bold text-white/5 md:bg-background md:inline-block md:px-4 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-copper">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
