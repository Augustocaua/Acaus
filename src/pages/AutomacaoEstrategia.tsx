import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const AutomacaoEstrategia = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Automação & Estratégia para escalar operações
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-lg text-muted-foreground">
                  Processos mais enxutos, times focados no que importa e decisões guiadas
                  por dados, não por adivinhação.
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
                  <h2>Organizar hoje para crescer melhor amanhã</h2>
                </Reveal>
                <Reveal delay={100}>
                  <p>
                    Mapeamos fluxos, entendemos gargalos e desenhamos automações que
                    conectam ferramentas, pessoas e informações em um fluxo contínuo.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <p>
                    O objetivo é simples: reduzir tarefas repetitivas, evitar retrabalho
                    e dar clareza sobre o que está acontecendo no seu funil de vendas,
                    no atendimento e na operação como um todo.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-4">
                <Reveal delay={200}>
                  <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-6 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.5)]">
                    <h3 className="text-xl font-semibold mb-2">Alguns cenários comuns</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Leads chegando por vários canais e se perdendo no caminho</li>
                      <li>Planilhas manuais que consomem tempo para ser atualizadas</li>
                      <li>Falta de visão clara sobre funil, entregas e follow-up</li>
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
                Exemplos de automações e estratégias
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Funil automatizado</h3>
                  <p className="text-sm text-muted-foreground">
                    Leads entrando por formulários, WhatsApp ou páginas são
                    automaticamente registrados e categorizados.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Pós-venda inteligente</h3>
                  <p className="text-sm text-muted-foreground">
                    Automação de follow-up, pesquisa de satisfação e reativação de
                    clientes.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Relatórios estratégicos</h3>
                  <p className="text-sm text-muted-foreground">
                    Consolidação de dados em painéis que mostram o que realmente importa
                    para decidir.
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
                Tecnologias e ferramentas que podemos integrar
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={100}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>CRMs, ferramentas de vendas e funil</li>
                  <li>Plataformas de email marketing e automação</li>
                  <li>Ferramentas de atendimento e chat</li>
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Planilhas e bancos de dados online</li>
                  <li>Integrações via API e conectores no-code/low-code</li>
                  <li>Workflows personalizados sob medida</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Benefícios estratégicos da automação
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div>
                  <h3 className="font-semibold mb-2">Tempo</h3>
                  <p className="text-sm text-muted-foreground">
                    Menos tarefas repetitivas, mais foco em ações que realmente geram
                    resultado.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <h3 className="font-semibold mb-2">Controle</h3>
                  <p className="text-sm text-muted-foreground">
                    Mais visibilidade sobre o funil, as entregas e os números do negócio.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h3 className="font-semibold mb-2">Escala</h3>
                  <p className="text-sm text-muted-foreground">
                    Processos prontos para crescer sem travar o time nem depender de
                    planilhas manuais.
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
                Vamos organizar o crescimento do seu negócio?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground mb-8">
                Com uma estratégia clara e automações bem implementadas, sua operação
                fica mais leve, previsível e preparada para escalar.
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

export default AutomacaoEstrategia;

