import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Página não encontrada ou conjunto de dados vazio.</p>
      <Button asChild>
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  );
}
