import React from "react";
import { cn } from "@/src/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 md:gap-2 mb-6 md:mb-8", className)}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground" {...props}>
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
