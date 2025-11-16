import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageSquare, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-tech text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">Acaus</div>
              <p className="text-primary-foreground/80 text-sm">
                Transformando negócios através de inteligência artificial, automação inteligente e desenvolvimento de sites e landing pages.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-primary-foreground/80 hover:text-copper transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <a href="/produtos" className="text-primary-foreground/80 hover:text-copper transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#automacao" className="text-primary-foreground/80 hover:text-copper transition-colors">
                    IA & Automação
                  </a>
                </li>
                <li>
                  <a href="/sobre" className="text-primary-foreground/80 hover:text-copper transition-colors">
                    Sobre nós
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>IA de Atendimento</li>
                <li>Automação Inteligente</li>
                <li>Dashboards Inteligentes</li>
                <li>Integração de Sistemas</li>
                <li>Desenvolvimento de Sites e Landing Pages</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <Reveal delay={0}>
                <h3 className="font-semibold mb-4">Contato</h3>
              </Reveal>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <Reveal delay={100}>
                  <li><a href="mailto:acausvision@gmail.com" className="hover:text-copper">acausvision@gmail.com</a></li>
                </Reveal>
                <Reveal delay={200}>
                  <li><a href="tel:+557182875822" className="hover:text-copper">+55 71 8287-5822</a></li>
                </Reveal>
              </ul>
              <div className="flex gap-4 mt-6">
                <Reveal delay={0}>
                  <a
                    href="https://www.instagram.com/acausvision/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-copper flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>
                </Reveal>
                <Reveal delay={100}>
                  <a
                    href="https://wa.me/557182875822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-copper flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <MessageSquare size={20} />
                  </a>
                </Reveal>
                <Reveal delay={200}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-copper flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Acaus. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
