import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnologia, Automação e Estratégia Digital que Transformam Negócios</h1>
              </Reveal>
              <div className="prose prose-neutral dark:prose-invert mx-auto">
                <Reveal delay={100}>
                  <p>
                    A ACaus nasceu para simplificar a tecnologia e torná-la uma aliada real no crescimento de empresas. Fundada por Augusto Cauã, a ACaus surgiu da visão de que muitos empreendedores trabalham duro, mas ainda dependem de processos manuais, páginas desatualizadas ou estratégias digitais que não conversam com seus objetivos.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>Nossa missão é mudar isso.</p>
                </Reveal>
                <Reveal delay={300}>
                  <p>
                    Criamos soluções inteligentes com IA, automação e design estratégico, desenvolvidas para que qualquer negócio — de lojas e clínicas a prestadores de serviço e e-commerce — possa crescer com mais foco, mais organização e mais resultados.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* O que a ACaus faz */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">O que a ACaus faz</h2>
            </Reveal>
            <div className="prose prose-neutral dark:prose-invert">
              <Reveal delay={100}>
                <p>Somos especialistas em transformar rotinas e aumentar resultados através de:</p>
              </Reveal>
              <div className="space-y-8">
                <div>
                  <Reveal delay={200}>
                    <h3>Landing pages e sites que realmente convertem</h3>
                  </Reveal>
                  <Reveal delay={250}>
                    <p>Páginas feitas com método, tecnologia e narrativa estratégica — criadas para vender 24h por dia.</p>
                  </Reveal>
                </div>
                <div>
                  <Reveal delay={300}>
                    <h3>Automação com IA personalizada</h3>
                  </Reveal>
                  <Reveal delay={350}>
                    <p>Fluxos que organizam atendimentos, reduzem tarefas repetitivas e devolvem tempo ao empreendedor.</p>
                  </Reveal>
                </div>
                <div>
                  <Reveal delay={400}>
                    <h3>Soluções digitais sob medida</h3>
                  </Reveal>
                  <Reveal delay={450}>
                    <p>Integrações, sistemas simples, páginas para eventos, captação de leads e muito mais.</p>
                  </Reveal>
                </div>
              </div>
              <Reveal delay={500}>
                <p className="mt-8">
                  Tudo isso documentado com clareza, desde o briefing até a entrega final — para que o cliente entenda cada etapa e veja os resultados com transparência.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Quem é Augusto Cauã */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quem é Augusto Cauã — Fundador da ACaus</h2>
            </Reveal>
            <div className="prose prose-neutral dark:prose-invert">
              <Reveal delay={100}>
                <p>
                  Augusto Cauã é o idealizador e cérebro estratégico da ACaus. Apaixonado por tecnologia, automação e criação de experiências digitais inteligentes, ele desenvolveu a empresa com o objetivo de aproximar empreendedores da tecnologia de forma simples, objetiva e eficiente.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>Sua visão desde o início foi clara:</p>
              </Reveal>
              <ul className="list-disc list-inside space-y-2">
                <Reveal delay={250}><li>Tornar a tecnologia acessível para negócios que nunca tiveram contato com automação.</li></Reveal>
                <Reveal delay={300}><li>Trazer modernidade e estratégia para pequenas e médias empresas.</li></Reveal>
                <Reveal delay={350}><li>Criar sistemas que economisem tempo, aumentem lucros e organizem a rotina.</li></Reveal>
                <Reveal delay={400}><li>Construir projetos sólidos, com base em dados, design e inteligência artificial aplicada ao mundo real.</li></Reveal>
              </ul>
              <Reveal delay={450}>
                <p className="mt-4">
                  Cada solução criada pela ACaus carrega essa mentalidade: resolver problemas reais de maneira moderna, funcional e inteligente.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nosso propósito */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nosso propósito</h2>
            </Reveal>
            <div className="prose prose-neutral dark:prose-invert">
              <ul className="list-disc list-inside space-y-2">
                <Reveal delay={100}><li>Ajudar empresas a crescerem com menos esforço e mais estratégia.</li></Reveal>
                <Reveal delay={150}><li>Transformar processos que antes consumiam horas em tarefas automáticas.</li></Reveal>
                <Reveal delay={200}><li>Criar páginas que vendem, mesmo quando o empreendedor está descansando.</li></Reveal>
                <Reveal delay={250}><li>Elevar negócios comuns a um novo nível de profissionalismo, agilidade e presença digital.</li></Reveal>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Prontos para transformar o seu negócio</h2>
            </Reveal>
            <div className="prose prose-neutral dark:prose-invert">
              <Reveal delay={100}>
                <p>
                  A ACaus está aqui para ser parceira do seu crescimento, não apenas fornecedora de um serviço.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p>
                  Se você quer organizar seu atendimento, capturar mais leads, vender mais ou modernizar seu negócio com tecnologia — a ACaus cria a solução certa para você.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;