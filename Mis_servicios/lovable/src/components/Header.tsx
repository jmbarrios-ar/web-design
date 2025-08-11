import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-semibold">
              <span className="accent-text">S3tech</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Contacto
              </button>
              <Button 
                className="btn-minimal text-sm"
                onClick={() => scrollToSection('contacto')}
              >
                Consulta Gratis
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-16 right-0 bottom-0 w-72 bg-surface border-l border-border shadow-large">
            <nav className="p-6 space-y-6">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors duration-200 border-b border-border/50"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors duration-200 border-b border-border/50"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors duration-200 border-b border-border/50"
              >
                Contacto
              </button>
              <div className="pt-4">
                <Button 
                  className="btn-minimal w-full"
                  onClick={() => scrollToSection('contacto')}
                >
                  Consulta Gratis
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;