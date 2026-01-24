import { Instagram, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-2xl font-bold tracking-tight text-white">
            ACAUS<span className="text-copper">.</span>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © {currentYear} ACAUS. Todos os direitos reservados.
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/acausvision/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-copper transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/557182875822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-copper transition-colors"
            >
              <MessageSquare size={20} />
            </a>
             {/* Linkedin placeholder if needed, removing for now if not provided, keeping minimal */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
