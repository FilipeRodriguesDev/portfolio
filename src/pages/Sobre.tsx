import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ContactCard } from "@/src/components/ui/ContactCard";
import { SkillCard } from "@/src/components/ui/SkillCard";
import { GraduationCap, Database, BrainCircuit, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export function Sobre() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto w-full gap-12 md:gap-16">
      <section>
        <SectionTitle 
          title="Sobre Mim" 
          subtitle="Análise de Sistemas & Business Intelligence"
        />
        
        <div className="prose prose-invert max-w-none text-muted-foreground mt-4 md:mt-8">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Estudante de Análise e Desenvolvimento de Sistemas (UNICSUL) com atuação em suporte a sistemas corporativos e vivência em rotinas financeiras/administrativas no ecossistema SAP.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-4 md:mt-6 text-foreground/90">
            Minha trajetória une o entendimento de negócios à construção de soluções analíticas. Foco no desenvolvimento de consultas otimizadas em SQL (PostgreSQL), criação de dashboards interativos no Power BI, automação de relatórios e manipulação de dados em Excel. Tenho como objetivo apoiar a tomada de decisão das empresas por meio de indicadores confiáveis e visões estratégicas.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-4 md:mb-6">Formação Acadêmica</h3>
        <motion.div 
          whileHover={{ y: -2 }}
          className="glass-card p-5 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="size-10 md:size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <GraduationCap className="size-5 md:size-6 text-primary" />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-2 relative z-10">
            <h4 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">Análise e Desenvolvimento de Sistemas</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-muted-foreground">
              <span className="font-medium text-foreground/80 text-sm md:text-base">Universidade Cruzeiro do Sul (UNICSUL)</span>
              <span className="hidden sm:block size-1.5 rounded-full bg-white/20" />
              <span className="text-sm">Superior em andamento (Previsão de conclusão: 2026)</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Cursos & Certificações</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            category="Business Intelligence & Dados"
            icon={BarChart3}
            items={[
              "Business Intelligence (BI) — FIAP",
              "Big Data & Analytics — FIAP",
              "Introdução à Análise de Dados (Power BI) — Fundação Bradesco"
            ]}
          />
          <SkillCard 
            category="Banco de Dados & Cloud"
            icon={Database}
            items={[
              "Administrando Banco de Dados — Fundação Bradesco",
              "AWS Cloud Practitioner (CLF-C02) — Udemy"
            ]}
          />
          <SkillCard 
            category="Inteligência Artificial Aplicada a Dados"
            icon={BrainCircuit}
            items={[
              "AI Reports com Excel, GPT Agents e Claude Code — DIO",
              "Introdução a AI Reports — DIO",
              "Criando Agentes de Tratamento de Dados — DIO"
            ]}
          />
        </div>
      </section>

      <section className="pt-4">
        <ContactCard />
      </section>
    </div>
  );
}
