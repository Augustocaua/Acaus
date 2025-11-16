import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, MessageSquare, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contato = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ nome?: string; email?: string }>({});
  const [touched, setTouched] = useState<{ nome?: boolean; email?: boolean }>({});

  const validateNome = (v: string) => (v.trim() ? "" : "Por favor, informe seu nome");
  const validateEmail = (v: string) => {
    if (!v.trim()) return "Por favor, informe seu email";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(v) ? "" : "Insira um email válido";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (name === "nome") {
      const msg = validateNome(value);
      setErrors((prev) => ({ ...prev, nome: msg || undefined }));
    } else if (name === "email") {
      const msg = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: msg || undefined }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nome" && touched.nome) {
      const msg = validateNome(value);
      setErrors((prev) => ({ ...prev, nome: msg || undefined }));
    }
    if (name === "email" && touched.email) {
      const msg = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: msg || undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nome = String(formData.get("nome") || "");
    const email = String(formData.get("email") || "");
    const empresa = String(formData.get("empresa") || "");
    const mensagem = String(formData.get("mensagem") || "");

    const nomeError = validateNome(nome);
    const emailError = validateEmail(email);

    setErrors({ nome: nomeError || undefined, email: emailError || undefined });
    setTouched({ nome: true, email: true });

    if (nomeError || emailError) {
      const firstInvalid = nomeError
        ? form.querySelector('input[name="nome"]')
        : form.querySelector('input[name="email"]');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    // Try server-side send first
    const tryServerSend = async () => {
      try {
        const resp = await fetch("http://localhost:4000/api/send-contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, empresa, mensagem }),
        });
        if (resp.ok) return true;
        return false;
      } catch (err) {
        return false;
      }
    };

    tryServerSend().then((ok) => {
      if (!ok) {
        const subject = encodeURIComponent(`Contato - ${nome}`);
        const body = encodeURIComponent(
          `Nome: ${nome}\nEmail: ${email}\nEmpresa: ${empresa || '-'}\n\nMensagem:\n${mensagem}`
        );
        const mailtoUrl = `mailto:acausvision@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, "_blank");
      }
      navigate("/confirmacao");
    });
  };

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

                  <form noValidate onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>

                     <Input
                       id="nome"
                       name="nome"
                       placeholder="Seu nome"
                       autoComplete="name"
                       aria-invalid={!!errors.nome}
                       aria-describedby="nome-error"
                       onBlur={handleBlur}
                       onChange={handleChange}
                     />
                     {touched.nome && errors.nome && (
                       <p id="nome-error" className="text-sm text-red-600 mt-1">{errors.nome}</p>
                     )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>

                     <Input
                       id="email"
                       name="email"
                       type="email"
                       placeholder="voce@empresa.com"
                       autoComplete="email"
                       aria-invalid={!!errors.email}
                       aria-describedby="email-error"
                       onBlur={handleBlur}
                       onChange={handleChange}
                     />
                     {touched.email && errors.email && (
                       <p id="email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>
                     )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa (opcional)</Label>
                      <Input id="empresa" name="empresa" autoComplete="organization" placeholder="Nome da empresa" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>

                     <Textarea id="mensagem" name="mensagem" placeholder="Conte-nos sobre seu projeto ou dúvida" />
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