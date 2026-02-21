import { ChefHat, Phone, Heart } from 'lucide-react';

export function Footer() {
  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`;

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Personal Chef',
    'Banquetes & Eventos',
    'Marmitas Fit',
    'Cardápios',
    'Aulas de Culinária',
  ];

  return (
    <footer className="relative w-full bg-white text-charcoal overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal">Letícia Ramos</h3>
                <p className="text-xs text-charcoal/60">Chef de Cozinha</p>
              </div>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
              Transformando momentos em experiências gastronômicas
              inesquecíveis há 18 anos. Paixão, dedicação e excelência em cada
              prato.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+55 31 9 9884-1213</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-charcoal">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-charcoal/70 hover:text-burgundy transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-charcoal">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-burgundy transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Image */}
          <div className="flex flex-col items-center lg:items-end">
            <img
              src="/images/logo.png"
              alt="Letícia Ramos Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Letícia Ramos - Chef de Cozinha.
              Todos os direitos reservados.
            </p>
            <p className="text-charcoal/50 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-burgundy fill-burgundy" />{' '}
              em Belo Horizonte
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
