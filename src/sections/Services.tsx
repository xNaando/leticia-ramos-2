import { useEffect, useRef } from 'react';
import {
  UtensilsCrossed,
  PartyPopper,
  Salad,
  BookOpen,
  Home,
  Cake,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20solicitar%20um%20orçamento.`;
  const baseUrl = import.meta.env.BASE_URL;

  const services = [
    {
      icon: Home,
      title: 'Personal Chef',
      description:
        'Experiência gastronômica exclusiva na sua casa. Ideal para jantares românticos, encontros com amigos ou celebrações em família.',
      image: `${baseUrl}images/personal-chef.jpg`,
      features: [
        'Menu personalizado',
        'Compras dos ingredientes',
        'Preparação no local',
        'Serviço completo',
      ],
    },
    {
      icon: PartyPopper,
      title: 'Banquetes & Eventos',
      description:
        'Celebrações inesquecíveis com cardápios sofisticados. Casamentos, aniversários, eventos corporativos e muito mais.',
      image: `${baseUrl}images/banquete2.jpg`,
      features: [
        'Eventos de qualquer porte',
        'Equipe completa',
        'Decoração harmoniosa',
        'Buffet ou servido à mesa',
      ],
    },
    {
      icon: Salad,
      title: 'Marmitas Fit',
      description:
        'Alimentação saudável e saborosa para o seu dia a dia. Refeições balanceadas, preparadas com ingredientes frescos.',
      image: `${baseUrl}images/marmitas-fit.jpg`,
      features: [
        'Cardápio variado',
        'Porções balanceadas',
        'Ingredientes frescos',
        'Entrega disponível',
      ],
    },
    {
      icon: BookOpen,
      title: 'Cardápios para Restaurantes',
      description:
        'Consultoria especializada para criar ou renovar o cardápio do seu restaurante. Inovação que valoriza sua cozinha.',
      image: `${baseUrl}images/cardapio.jpg`,
      features: [
        'Análise do conceito',
        'Criação de pratos',
        'Precificação',
        'Treinamento da equipe',
      ],
    },
    {
      icon: UtensilsCrossed,
      title: 'Aulas de Culinária',
      description:
        'Aprenda técnicas profissionais em aulas personalizadas. Para iniciantes ou quem quer aprimorar suas habilidades.',
      image: `${baseUrl}images/image.jpg`,
      features: [
        'Aulas individuais ou em grupo',
        'Técnicas profissionais',
        'Receitas exclusivas',
        'Certificado de participação',
      ],
    },
    {
      icon: Cake,
      title: 'Coffee Break & Brunch',
      description:
        'Pausas corporativas e encontros descontraídos com opções deliciosas e apresentação impecável.',
      image: `${baseUrl}images/dish-gourmet.jpg`,
      features: [
        'Opções doces e salgadas',
        'Bebidas variadas',
        'Montagem elegante',
        'Para qualquer ocasião',
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-cream to-cream-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238B2635' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold-dark font-medium tracking-wider uppercase text-sm mb-4">
            Meus Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Soluções Gastronômicas
            <span className="text-gradient-gold"> Sob Medida</span>
          </h2>
          <p className="text-charcoal/70 text-lg">
            Ofereço uma variedade de serviços para atender às suas necessidades,
            desde refeições do dia a dia até eventos especiais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-burgundy" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-charcoal/60"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burgundy font-medium text-sm group/link"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 text-center">
          <div className="bg-gradient-elegant rounded-3xl p-8 lg:p-12 shadow-elegant">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos criar juntos a experiência gastronômica
              perfeita para você ou seu evento.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-burgundy hover:bg-gold hover:text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 group"
              >
                Falar com Letícia
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
