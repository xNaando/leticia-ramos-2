import { useEffect, useRef } from 'react';
import { Phone, ChefHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20chef.`;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-cream"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B2635' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="reveal space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy/10 rounded-full">
                <ChefHat className="w-4 h-4 text-burgundy" />
                <span className="text-sm font-medium text-burgundy">
                  18 Anos de Experiência
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight">
                Transformando
                <span className="block text-gradient-gold">Momentos</span>
                <span className="block">em Experiências</span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-xl leading-relaxed">
                Sou <strong className="text-burgundy">Letícia Ramos</strong>, chef
                de cozinha especializada em criar experiências gastronômicas
                únicas. Do personal chef a banquetes, cada prato é uma obra de
                arte.
              </p>
            </div>

            <div className="reveal flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-6 text-lg rounded-full shadow-elegant hover:shadow-xl transition-all duration-300 group animate-pulse-glow"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Fale Comigo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#servicos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  Conheça Meus Serviços
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6 pt-8 border-t border-burgundy/10">
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
                  18+
                </div>
                <div className="text-sm text-charcoal/60 mt-1">
                  Anos de
                  <br />
                  Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
                  500+
                </div>
                <div className="text-sm text-charcoal/60 mt-1">
                  Eventos
                  <br />
                  Realizados
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
                  100%
                </div>
                <div className="text-sm text-charcoal/60 mt-1">
                  Clientes
                  <br />
                  Satisfeitos
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="reveal relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-full animate-pulse" />
              <div className="absolute -inset-8 border border-burgundy/20 rounded-full" />

              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-elegant border-4 border-gold/50">
                <img
                  src="/images/chef-leticia.png"
                  alt="Letícia Ramos - Chef de Cozinha"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-gold p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-charcoal">
                      Chef Profissional
                    </div>
                    <div className="text-sm text-charcoal/60">
                      Especialista em Eventos
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-burgundy text-white rounded-2xl shadow-elegant p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold">18</div>
                  <div className="text-xs opacity-80">Anos de<br/>Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FDF8F3"
          />
        </svg>
      </div>
    </section>
  );
}
