// Internal reference: Augusto caua
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Início", id: "hero" },
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Diferenciais", id: "diferenciais" },
    { name: "Processo", id: "processo" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Reveal delay={0}>
            <button 
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Acaus logo.png" 
                alt="Acaus" 
                className="h-10 w-auto object-contain"
              />
            </button>
          </Reveal>

          {/* Desktop Menu */}
          <Reveal delay={100}>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-white/80 hover:text-copper transition-colors duration-300 uppercase tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 flex flex-col gap-4 animate-fade-in shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-white/80 hover:text-copper transition-colors duration-300 text-left py-2 border-b border-white/5 last:border-0"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
