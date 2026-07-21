import { Experience } from "@/src/types";

interface TimelineProps {
  items: Experience[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
      {items.map((exp) => (
        <div key={exp.id} className="relative">
          <span className="absolute -left-[33px] top-1 flex size-4 items-center justify-center rounded-full bg-background border border-white/20">
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
          
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-sm font-medium text-muted-foreground font-mono">{exp.date}</span>
            <h3 className="text-xl font-semibold text-foreground tracking-tight">{exp.title}</h3>
            <span className="text-primary/80 font-medium">{exp.company}</span>
          </div>
          
          {exp.description && (
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {exp.description}
            </p>
          )}
          
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-white/20 rounded-full shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
