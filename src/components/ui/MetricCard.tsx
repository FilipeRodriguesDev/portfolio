import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  className?: string;
}

export function MetricCard({ label, value, trend, className }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn("glass-card p-5 md:p-6 rounded-xl flex flex-col gap-2", className)}
    >
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-semibold text-foreground tracking-tight">{value}</span>
        {trend && <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">{trend}</span>}
      </div>
    </motion.div>
  );
}
