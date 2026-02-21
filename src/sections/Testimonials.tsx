import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials = [
    {
      name: 'Mariana Oliveira',
      role: 'Aniversário de 50 anos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      text: 'A Letícia transformou o aniversário do meu marido em uma experiência inesquecível. Cada prato era uma obra de arte, e o atendimento foi impecável. Todos os convidados elogiaram muito!',
      rating: 5,
    },
    {
      name: 'Carlos Mendes',
      role: 'Evento Corporativo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'Contratamos a Letícia para um evento corporativo de 100 pessoas e ela superou todas as expectativas. Organização perfeita, comida deliciosa e apresentação impecável. Recomendo de olhos fechados!',
      rating: 5,
    },
    {
      name: 'Fernanda Costa',
      role: 'Cliente de Marmitas Fit',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'As marmitas da Letícia mudaram minha alimentação. São saborosas, variadas e super práticas. Em 3 meses já percebi muita diferença na minha energia e disposição. Vale cada centavo!',
      rating: 5,
    },
    {
      name: 'Ricardo Souza',
      role: 'Restaurante Sabor & Arte',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'A consultoria da Letícia foi fundamental para renovarmos nosso cardápio. Ela trouxe inovação sem perder a essência do nosso restaurante. As vendas aumentaram 40% após a reformulação!',
      rating: 5,
    },
    {
      name: 'Ana Paula Lima',
      role: 'Jantar Romântico',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      text: 'Queria fazer algo especial para meu noivo e a Letícia criou uma experiência mágica. O jantar foi perfeito, do início ao fim. Ela cuidou de tudo, só precisei aproveitar o momento!',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay infinito a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="relative w-full py-24 lg:py-32 bg-cream overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold-dark font-medium tracking-wider uppercase text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            O Que Meus
            <span className="text-gradient-gold"> Clientes</span> Dizem
          </h2>
          <p className="text-charcoal/70 text-lg">
            A satisfação dos meus clientes é meu maior orgulho. Confira algumas
            experiências compartilhadas.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold z-10">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-elegant p-8 lg:p-12 pt-16 overflow-hidden">
              <div
                key={currentIndex}
                className="text-center animate-fade-in"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gold/30 mb-4"
                  />
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-charcoal/60">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-burgundy w-8'
                      : 'bg-burgundy/30 hover:bg-burgundy/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { value: '500+', label: 'Eventos Realizados' },
            { value: '1000+', label: 'Clientes Atendidos' },
            { value: '18', label: 'Anos de Experiência' },
            { value: '5.0', label: 'Avaliação Média' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-gold transition-shadow"
            >
              <div className="font-serif text-3xl lg:text-4xl font-bold text-burgundy mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
