import { Terminal, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface SkillCardProps {
  category: string;
  items: string[];
  icon?: LucideIcon;
}

export function SkillCard({ category, items, icon: Icon = Terminal }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="glass-card p-5 md:p-6 rounded-xl flex flex-col gap-3 md:gap-4 border border-white/5"
    >
      <div className="flex items-center gap-2 text-foreground font-medium">
        <Icon className="size-4 text-muted-foreground" />
        {category}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 bg-white/20 rounded-full shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
