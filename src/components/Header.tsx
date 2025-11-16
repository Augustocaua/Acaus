// Internal reference: Augusto caua
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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
    // Se estiver em outra página, primeiro navegue para a home
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Reveal delay={0}>
            <Link to="/">
              <img
                src="/Acaus logo.png"
                alt="Acaus"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </Reveal>

          {/* Desktop Menu */}
          <Reveal delay={100}>
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-foreground hover:text-copper transition-colors duration-300"
              >
                Início
              </Link>
              <Link
                to="/produtos"
                className="text-foreground hover:text-copper transition-colors duration-300"
              >
                Produtos
              </Link>

              <Link
                to="/sobre"
                className="text-foreground hover:text-copper transition-colors duration-300"
              >
                Sobre nós
              </Link>
              <Link
                to="/contato"
                className="text-foreground hover:text-copper transition-colors duration-300"
              >
                Contato
              </Link>
            </div>
          </Reveal>

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
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </Link>

            <Link
              to="/sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Sobre nós
            </Link>
            <Link
              to="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-copper transition-colors duration-300 text-left"
            >
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
