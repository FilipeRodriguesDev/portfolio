import { ME, getFeaturedProjects, SKILLS } from "@/src/lib/data";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { SkillCard } from "@/src/components/ui/SkillCard";
import { ContactCard } from "@/src/components/ui/ContactCard";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center md:items-start pt-4 md:pt-20 gap-8 md:gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 md:gap-6 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="glass" className="mb-4">
              <span className="size-1.5 rounded-full bg-primary mr-2 animate-pulse" />
              Portfólio & Projetos
            </Badge>
          </motion.div>
          
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.2] md:leading-tight">
              Olá, eu sou o Filipe. <br className="hidden lg:block"/>
              <span className="text-muted-foreground">Desenvolvedor & Analista de Dados.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              {ME.objective}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start w-full sm:w-auto gap-3 sm:gap-4 mt-2 md:mt-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
            <Button asChild size="default" className="rounded-full w-full sm:w-auto sm:px-8 sm:h-12 h-11 text-base">
              <Link to="/projetos">
                Ver Projetos <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="default" className="rounded-full w-full sm:w-auto sm:px-8 sm:h-12 h-11 text-base">
              <a href={`mailto:${ME.email}`}>Entrar em Contato</a>
            </Button>
            <Button asChild variant="outline" size="default" className="rounded-full w-full sm:w-auto sm:px-8 sm:h-12 h-11 text-base border-white/10 hover:bg-white/5">
              <a href="/curriculo-filipe.pdf" download="curriculo-filipe.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 size-4" /> Baixar CV
              </a>
            </Button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-40 h-40 md:w-64 md:h-80 shrink-0 rounded-full md:rounded-2xl overflow-hidden border border-white/10 mt-4 md:mt-0"
        >
          <div className="absolute inset-0 bg-white/5" />
          <img 
            src="/profile.jpeg" 
            alt="Filipe Rodrigues Moura" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <SectionTitle 
            title="Projetos em Destaque" 
            subtitle="Projetos reais de tecnologia, inteligência de dados e desenvolvimento web."
            className="mb-0"
          />
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link to="/projetos">
              Ver todos <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Button asChild variant="ghost" className="w-full mt-6 sm:hidden">
            <Link to="/projetos">
              Ver todos os projetos <ArrowRight className="ml-2 size-4" />
            </Link>
        </Button>
      </section>

      {/* Core Tech Stack */}
      <section>
        <SectionTitle title="Stack Analítica" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup) => (
            <SkillCard key={skillGroup.category} category={skillGroup.category} items={skillGroup.items} />
          ))}
        </div>
      </section>

      <ContactCard />
    </div>
  );
}
