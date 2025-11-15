import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Reveal from "@/components/Reveal";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre nós</h1>
              </Reveal>
              {/* <Reveal delay={100}>
                <p className="text-lg text-muted-foreground">
                  Somos a Acaus. Tornamos a IA acessível, humana e estratégica, construindo soluções
                  que transformam negócios com automação inteligente e visão de produto.
                </p>
              </Reveal> */}
            </div>
          </div>
        </section>
        {/* Reutiliza a seção "About" da home para conteúdo institucional */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;