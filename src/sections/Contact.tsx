import { useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  MessageCircle,
  ArrowRight,
  ChefHat,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
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

  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`;

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 31 9 9884-1213',
      link: whatsappLink,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@leticiaramoschef.com',
      link: 'mailto:contato@leticiaramoschef.com',
    },
    {
      icon: MapPin,
      label: 'Atendimento',
      value: 'Belo Horizonte e Região',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg - Sáb: 8h às 20h',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Facebook, label: 'Facebook', link: '#' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-cream to-cream-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="reveal max-w-5xl mx-auto">
          <div className="bg-gradient-elegant rounded-3xl shadow-elegant overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - CTA Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <ChefHat className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Vamos criar algo especial?
                  </span>
                </div>

                <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                  Pronto para Transformar Seu Evento?
                </h2>

                <p className="text-white/80 mb-8 leading-relaxed">
                  Entre em contato agora mesmo e vamos planejar juntos a
                  experiência gastronômica perfeita para você. Orçamento sem
                  compromisso!
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/60">WhatsApp</div>
                      <div className="font-medium">+55 31 9 9884-1213</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-white text-burgundy hover:bg-gold hover:text-white py-6 text-lg rounded-full shadow-lg transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* Right - Contact Info */}
              <div className="bg-white p-8 lg:p-12">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-cream transition-colors group"
                    >
                      <div className="w-10 h-10 bg-burgundy/10 rounded-lg flex items-center justify-center group-hover:bg-burgundy transition-colors">
                        <item.icon className="w-5 h-5 text-burgundy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm text-charcoal/60">
                          {item.label}
                        </div>
                        <div className="font-medium text-charcoal">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-charcoal/10">
                  <p className="text-sm text-charcoal/60 mb-4">
                    Siga nas redes sociais
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center hover:bg-burgundy transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-burgundy group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Benefits */}
        <div className="reveal grid sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            {
              title: 'Orçamento Grátis',
              description: 'Solicite seu orçamento sem compromisso',
            },
            {
              title: 'Atendimento Personalizado',
              description: 'Cada cliente é único e especial',
            },
            {
              title: 'Garantia de Qualidade',
              description: 'Compromisso com a excelência',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-gold transition-shadow"
            >
              <h4 className="font-serif font-bold text-charcoal mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-charcoal/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
