import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, MessageSquare, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Reveal delay={0}>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
                </Reveal>
                <p className="text-lg text-muted-foreground">
                  Fale com a nossa equipe e descubra como a Acaus pode impulsionar seu negócio com IA e automação.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Formulário de contato */}
                <Reveal delay={100}>
                  <form className="space-y-4 bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="voce@empresa.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa (opcional)</Label>
                      <Input id="empresa" placeholder="Nome da empresa" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea id="mensagem" placeholder="Conte-nos sobre seu projeto ou dúvida" />
                    </div>
                    <Button type="submit" className="w-full">Enviar mensagem</Button>
                  </form>
                </Reveal>

                {/* Informações de contato */}
                <Reveal delay={100}>
                  <div className="space-y-6 bg-card border border-border rounded-xl p-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Fale diretamente</h2>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Mail size={16} />
                        <a href="mailto:acausvision@gmail.com" className="hover:text-copper">acausvision@gmail.com</a>
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MessageSquare size={16} />
                        <a href="https://wa.me/557182875822" target="_blank" rel="noopener noreferrer" className="hover:text-copper">+55 71 8287-5822</a>
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Instagram size={16} />
                        <a href="https://www.instagram.com/acausvision/" target="_blank" rel="noopener noreferrer" className="hover:text-copper">@acausvision</a>
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Atendimento</h2>
                      <p className="text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;