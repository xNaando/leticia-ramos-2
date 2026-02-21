import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappLink = `https://wa.me/5531998841213?text=Olá%20Letícia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-sm font-medium text-charcoal">Fale comigo!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rotate-45" />
        </div>
      </div>
    </a>
  );
}
