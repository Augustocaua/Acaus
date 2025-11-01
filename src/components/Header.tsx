import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Acaus</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("automacao")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              IA & Automação
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-copper transition-colors duration-300"
            >
              Contato
            </button>
            <Button variant="hero" size="default">
              Fale com a IA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("automacao")}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              IA & Automação
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Contato
            </button>
            <Button variant="hero" size="default" className="w-full">
              Fale com a IA
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
