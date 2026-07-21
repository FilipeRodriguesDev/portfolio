import { ME } from "@/src/lib/data";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 py-8 mt-24">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {ME.name}. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            title="LinkedIn"
          >
            <Linkedin className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            title="GitHub"
          >
            <Github className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={ME.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            title="WhatsApp"
          >
            <MessageCircle className="size-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a
            href={`mailto:${ME.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            title="Email"
          >
            <Mail className="size-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
