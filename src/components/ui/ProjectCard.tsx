import { Link } from "react-router-dom";
import { Project } from "@/src/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projetos/${project.slug}`} className="group block h-full">
      <Card className="h-full bg-card/40 border-white/5 transition-colors group-hover:bg-card/80 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-muted-foreground">{project.date}</span>
            <ArrowUpRight className="size-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col justify-between gap-6">
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-medium">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="bg-transparent text-muted-foreground">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
