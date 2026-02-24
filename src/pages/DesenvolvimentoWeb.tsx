import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const DesenvolvimentoWeb = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Desenvolvimento Web de Alta Performance
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-lg text-muted-foreground">
                  Sites institucionais e landing pages pensadas para conversão, velocidade
                  e autoridade, alinhadas à identidade da sua marca.
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
                  <h2>Experiências digitais que posicionam a sua marca</h2>
                </Reveal>
                <Reveal delay={100}>
                  <p>
                    Cada página é construída com foco em clareza, narrativa estratégica
                    e um fluxo pensado para guiar o visitante até a ação que importa:
                    clicar, entrar em contato ou comprar.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <p>
                    Unimos design limpo, estrutura bem organizada e tecnologia atual
                    para criar sites que carregam rápido, funcionam em qualquer tela e
                    comunicam valor em poucos segundos.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-4">
                <Reveal delay={200}>
                  <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-6 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.5)]">
                    <h3 className="text-xl font-semibold mb-2">Perfeito para</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Negócios locais que precisam ter presença profissional na web</li>
                      <li>Especialistas, consultores e infoprodutores</li>
                      <li>Empresas que querem páginas de oferta enxutas e eficientes</li>
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
                Exemplos de entregas
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Site institucional completo</h3>
                  <p className="text-sm text-muted-foreground">
                    Estrutura com páginas principais, navegação clara e foco em
                    credibilidade e diferenciais.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Landing page de oferta</h3>
                  <p className="text-sm text-muted-foreground">
                    Página única, enxuta e totalmente orientada a conversão para campanhas
                    específicas.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-2xl border border-white/5 bg-card/60 backdrop-blur-sm p-5">
                  <h3 className="font-semibold mb-2">Páginas de captura</h3>
                  <p className="text-sm text-muted-foreground">
                    Estruturas focadas em geração de leads com formulários claros e
                    mensagens objetivas.
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
                Tecnologias que utilizamos
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={100}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>React e ecosistema moderno de front-end</li>
                  <li>Vite para builds rápidos e otimizados</li>
                  <li>Tailwind CSS para estilização consistente</li>
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Boas práticas de SEO técnico</li>
                  <li>Padrões de acessibilidade e responsividade</li>
                  <li>Integração com ferramentas de análise e pixels</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Benefícios estratégicos para o seu negócio
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={100}>
                <div>
                  <h3 className="font-semibold mb-2">Posicionamento</h3>
                  <p className="text-sm text-muted-foreground">
                    Sua marca com presença digital à altura do serviço que entrega.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <h3 className="font-semibold mb-2">Conversão</h3>
                  <p className="text-sm text-muted-foreground">
                    Páginas pensadas para gerar leads, agendamentos e vendas.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h3 className="font-semibold mb-2">Escalabilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Estrutura pronta para receber tráfego de campanhas e crescer junto
                    com o negócio.
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
                Pronto para elevar o nível do seu site?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground mb-8">
                Vamos criar uma presença digital que realmente comunique o valor do seu
                trabalho e transforme visitas em oportunidades reais.
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

export default DesenvolvimentoWeb;

