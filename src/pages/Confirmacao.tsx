import Reveal from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Confirmacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-xl p-10">
              <Reveal delay={0}>
                <CheckCircle2 className="mx-auto text-green-500" size={64} />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-3xl font-bold">Mensagem enviada com sucesso</h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-muted-foreground">
                  Seus dados e sua mensagem foram enviados com sucesso. Em breve entraremos em contato.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <a href="/" className="mt-8 inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Voltar para a Home
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose prose-neutral dark:prose-invert text-center mx-auto">
              <Reveal delay={100}>
                <p>
                  Obrigado por entrar em contato! Em breve retornaremos com uma resposta.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Enquanto isso, fique à vontade para explorar nossos serviços e projetos.
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

export default Confirmacao;