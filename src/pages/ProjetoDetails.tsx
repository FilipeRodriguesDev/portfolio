import { useParams, Navigate, Link } from "react-router-dom";
import { getProjectBySlug } from "@/src/lib/data";
import { Badge } from "@/src/components/ui/badge";
import { ArrowLeft, BarChart3, Database, ExternalLink, Github } from "lucide-react";
import { MetricCard } from "@/src/components/ui/MetricCard";
import { CodeViewer } from "@/src/components/ui/CodeViewer";
import { motion } from "motion/react";

export function ProjetoDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <article className="flex flex-col max-w-4xl mx-auto w-full">
      <Link to="/projetos" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-6 md:mb-8 transition-colors">
        <ArrowLeft className="size-4" /> Voltar para projetos
      </Link>
      
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-muted-foreground font-mono">{project.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="glass" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-4 mt-6">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full transition-colors">
                Ver Ao Vivo <ExternalLink className="size-4" />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 text-foreground hover:bg-white/20 px-4 py-2 rounded-full transition-colors border border-white/5">
                GitHub <Github className="size-4" />
              </a>
            )}
          </div>
        )}
      </header>

      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
          {project.metrics.map((metric, i) => (
            <MetricCard 
              key={i} 
              label={metric.label} 
              value={metric.value} 
              trend={metric.trend} 
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed text-foreground/80">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="leading-relaxed mt-4">
                {project.longDescription}
              </p>
            )}
          </div>
          
          {project.codeSnippet && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <Database className="size-4" /> 
                Sample Query
              </h3>
              <CodeViewer 
                code={project.codeSnippet.code} 
                language={project.codeSnippet.language} 
                fileName={project.codeSnippet.fileName} 
              />
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-4 sticky top-24"
          >
            <BarChart3 className="size-6 text-primary" />
            <div>
              <h3 className="font-medium text-foreground mb-2">Impacto Analítico</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A modelagem e estruturação correta dos dados neste projeto permitiram análises mais profundas e decisões baseadas em métricas reais, reduzindo a fricção no acesso à informação e otimizando processos-chave.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
