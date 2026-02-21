import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`;

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled
                    ? 'bg-gradient-gold'
                    : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                <ChefHat
                  className={`w-5 h-5 ${
                    isScrolled ? 'text-white' : 'text-burgundy'
                  }`}
                />
              </div>
              <div className={`hidden lg:block ${isScrolled ? '' : 'lg:!hidden'}`}>
                <span className="font-serif font-bold text-charcoal">
                  Letícia Ramos
                </span>
              </div>
            </a>

            {/* Nome centralizado apenas no mobile */}
            <a
              href="#"
              className="absolute left-1/2 -translate-x-1/2 font-serif font-bold text-charcoal lg:hidden"
            >
              Letícia Ramos
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-burgundy ${
                    isScrolled ? 'text-charcoal' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`rounded-full px-6 transition-all ${
                    isScrolled
                      ? 'bg-burgundy hover:bg-burgundy-dark text-white'
                      : 'bg-burgundy hover:bg-burgundy-dark text-white'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-charcoal hover:bg-charcoal/10'
                  : 'text-charcoal hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  Letícia Ramos
                </h3>
                <p className="text-xs text-charcoal/60">Chef de Cozinha</p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal hover:bg-cream hover:text-burgundy rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-charcoal/10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-burgundy hover:bg-burgundy-dark text-white py-6 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
