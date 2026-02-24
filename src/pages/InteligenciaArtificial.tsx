import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const InteligenciaArtificial = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Inteligência Artificial aplicada ao atendimento e à operação
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-lg text-muted-foreground">
                  Soluções de IA que automatizam conversas, organizam demandas e criam
                  experiências mais rápidas e inteligentes para o seu cliente.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
              <div className="prose prose-neutral dark:prose-invert">
                <Reveal delay={0}>
                  <h2>Atendimento 24/7 sem perder o tom humano</h2>
                </Reveal>
                <Reveal delay={100}>
                  <p>
                    Criamos assistentes virtuais e fluxos inteligentes que respondem,
                    qualificam e direcionam seus clientes em tempo real, mantendo o
                    contexto das conversas e respeitando a linguagem do seu negócio.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <p>
                    Assim, sua equipe ganha tempo para focar no que é estratégico,
                    enquanto a IA cuida das primeiras etapas de contato, dúvidas
                    recorrentes e organização do funil.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-4">
                <Reveal delay={200}>
                  <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-6 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.5)]">
                    <h3 className="text-xl font-semibold mb-2">Aplicações práticas</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Atendimento automático integrado ao WhatsApp e site</li>
                      <li>Qualificação de leads com perguntas inteligentes</li>
                      <li>Organização de chamados e encaminhamento para setores</li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Exemplos de soluções com IA
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Assistente para pré-vendas</h3>
                  <p className="text-sm text-muted-foreground">
                    Bot que faz triagem dos contatos, identifica o interesse e envia
                    somente leads qualificados para o time comercial.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Atendimento de suporte</h3>
                  <p className="text-sm text-muted-foreground">
                    Resolução automática de dúvidas frequentes e organização de chamados
                    por prioridade.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Fluxos híbridos</h3>
                  <p className="text-sm text-muted-foreground">
                    IA e humano atuando juntos: o robô atende, a equipe assume quando
                    necessário, sem perder o contexto.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Tecnologias e integrações
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={100}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Modelos de linguagem avançados (IA generativa)</li>
                  <li>Integração com APIs, CRMs e sistemas internos</li>
                  <li>Conectores para WhatsApp, web chat e formulários</li>
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Dashboards de monitoramento e métricas</li>
                  <li>Ajustes finos contínuos com base em dados reais</li>
                  <li>Arquitetura segura e escalável</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Benefícios estratégicos da IA no seu negócio
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div>
                  <h3 className="font-semibold mb-2">Agilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Respostas rápidas e atendimento contínuo, mesmo fora do horário
                    comercial.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <h3 className="font-semibold mb-2">Organização</h3>
                  <p className="text-sm text-muted-foreground">
                    Conversas, pedidos e chamados registrados com muito mais clareza.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h3 className="font-semibold mb-2">Escalabilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Atenda muito mais pessoas sem precisar aumentar na mesma proporção o
                    tamanho da equipe.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Quer trazer IA para a rotina do seu negócio?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground mb-8">
                Vamos mapear os principais pontos de contato com seus clientes e criar
                fluxos inteligentes sob medida para a sua realidade.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-copper text-white hover:opacity-90 transition-colors"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InteligenciaArtificial;

