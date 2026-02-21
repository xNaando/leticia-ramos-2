import { useEffect, useRef } from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

export function About() {
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

  const diferenciais = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em cada detalhe',
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Cozinha feita com amor e dedicação',
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Foco total na satisfação do cliente',
    },
    {
      icon: Sparkles,
      title: 'Criatividade',
      description: 'Pratos únicos e experiências memoráveis',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative w-full py-24 lg:py-32 bg-cream"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-burgundy/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5]">
                  <img
                    src="/images/dish-gourmet.jpg"
                    alt="Prato Gourmet"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-gold aspect-square">
                  <img
                    src="/images/personal-chef.jpg"
                    alt="Chef em ação"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-gold aspect-square">
                  <img
                    src="/images/banquete.jpg"
                    alt="Banquete"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5]">
                  <img
                    src="/images/marmitas-fit.jpg"
                    alt="Marmitas Fit"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-elegant p-6 w-max max-w-[90%]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-charcoal">
                    18 Anos
                  </div>
                  <div className="text-charcoal/60">
                    de Experiência Culinária
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="reveal space-y-4">
              <span className="inline-block text-gold-dark font-medium tracking-wider uppercase text-sm">
                Sobre Mim
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                Uma História de
                <span className="text-gradient-gold"> Paixão</span> pela
                Gastronomia
              </h2>
            </div>

            <div className="reveal space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Olá! Sou <strong className="text-burgundy">Letícia Ramos</strong>,
                chef de cozinha com 18 anos de experiência transformando
                ingredientes em experiências inesquecíveis. Minha jornada na
                gastronomia começou com uma paixão que se tornou minha vida.
              </p>
              <p>
                Ao longo desses anos, tive o privilégio de trabalhar em diversos
                segmentos da culinária: desde restaurantes renomados até eventos
                exclusivos, sempre com o mesmo compromisso: entregar excelência
                em cada prato.
              </p>
              <p>
                Hoje, ofereço serviços personalizados que vão do{' '}
                <strong>personal chef</strong> para momentos íntimos, até
                <strong> banquetes</strong> para grandes celebrações. Cada
                projeto é único e recebe toda minha dedicação e criatividade.
              </p>
            </div>

            {/* Diferenciais Grid */}
            <div className="reveal grid grid-cols-2 gap-4 pt-4">
              {diferenciais.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-burgundy/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-burgundy transition-colors">
                    <item.icon className="w-5 h-5 text-burgundy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
