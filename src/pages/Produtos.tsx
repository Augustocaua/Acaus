import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Reveal from "@/components/Reveal";

const Produtos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Produtos</h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-lg text-muted-foreground">
                  Explore nossos produtos de IA e automação: prontos para acelerar seu crescimento.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        {/* Lista de produtos reutiliza a seção Services */}
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Produtos;