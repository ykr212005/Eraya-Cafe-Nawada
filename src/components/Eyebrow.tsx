import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "red",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "red" | "light";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em]",
        tone === "red" ? "text-primary" : "text-cream/80",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          tone === "red" ? "bg-primary/50" : "bg-cream/40",
        )}
      />
      {children}
    </p>
  );
}
