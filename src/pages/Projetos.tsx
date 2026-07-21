import { useState, useMemo } from "react";
import { PROJECTS } from "@/src/lib/data";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

const FILTERS = ["Todos", "Power BI", "SQL", "Python", "React", "TypeScript", "JavaScript"];

export function Projetos() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return PROJECTS;
    return PROJECTS.filter(p => p.tags.some(tag => tag.includes(activeFilter)));
  }, [activeFilter]);

  return (
    <div className="flex flex-col">
      <SectionTitle 
        title="Todos os Projetos" 
        subtitle="Explorando dados, modelagem e visualização."
      />
      
      <div className="flex flex-wrap gap-2 mt-2 mb-8">
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "secondary"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full transition-all duration-300",
              activeFilter !== filter && "bg-white/5 hover:bg-white/10"
            )}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
