import { EXPERIENCES } from "@/src/lib/data";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { Timeline } from "@/src/components/ui/Timeline";
import { ContactCard } from "@/src/components/ui/ContactCard";

export function Jornada() {
  return (
    <div className="flex flex-col max-w-3xl w-full">
      <SectionTitle 
        title="Jornada Profissional" 
        subtitle="Experiência prática em sistemas e transição para dados."
      />
      
      <div className="mt-8">
        <Timeline items={EXPERIENCES} />
      </div>

      <div className="mt-12">
        <ContactCard />
      </div>
    </div>
  );
}
