import React from "react";
import { cn } from "@/src/lib/utils";

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function MacWindow({ children, title, className }: MacWindowProps) {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl", className)}>
      <div className="flex items-center px-4 h-10 border-b border-white/5 bg-white/5">
        <div className="flex gap-2">
          <div className="size-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="size-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="size-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        {title && (
          <div className="flex-1 text-center pr-12 text-xs font-medium text-muted-foreground font-mono">
            {title}
          </div>
        )}
      </div>
      <div className="p-0 w-full overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
