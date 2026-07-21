import { MacWindow } from "./MacWindow";

interface CodeViewerProps {
  code: string;
  language?: string;
  fileName?: string;
}

export function CodeViewer({ code, language = "sql", fileName }: CodeViewerProps) {
  return (
    <MacWindow title={fileName || `query.${language}`}>
      <pre className="p-4 text-sm font-mono text-muted-foreground/80 leading-relaxed overflow-x-auto">
        <code>{code.trim()}</code>
      </pre>
    </MacWindow>
  );
}
