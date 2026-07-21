import { ME } from "@/src/lib/data";
import { Button } from "./button";
import { Mail, MessageCircle } from "lucide-react";

export function ContactCard() {
  return (
    <div className="glass-card p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-12 md:mt-16 border border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="flex flex-col gap-3 relative z-10 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-foreground tracking-tight">Vamos conversar?</h3>
        <p className="text-muted-foreground">Estou disponível para novas oportunidades profissionais, desafios na área de dados e desenvolvimento de software.</p>
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 md:gap-4 shrink-0 relative z-10">
        <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 w-full sm:w-auto">
          <a href={`mailto:${ME.email}`}>
            <Mail className="mr-2 size-4" /> Enviar E-mail
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="rounded-full w-full sm:w-auto">
          <a href={ME.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 size-4" /> WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
