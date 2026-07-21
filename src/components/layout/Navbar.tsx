import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
  { name: "Jornada", path: "/jornada" },
  { name: "Sobre", path: "/sobre" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-center px-4">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border-b border-white/5" />
      <nav className="relative flex w-full max-w-5xl items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
          <div className="size-4 rounded-sm bg-foreground shrink-0" />
          <span className="hidden min-[375px]:inline-block">Filipe</span>
        </Link>

        <ul className="flex items-center gap-0.5 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative px-2 sm:px-3 py-1.5 text-[13px] sm:text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-md bg-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
