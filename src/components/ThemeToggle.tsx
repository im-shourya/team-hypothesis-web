import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Terminal, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
        "hover:scale-110",
        isDark ? "glow-violet" : "border border-primary"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Terminal size={20} className="text-primary animate-pulse-glow" />
      ) : (
        <Sun size={20} className="text-primary" />
      )}

      {isDark && (
        <div className="absolute inset-0 rounded-lg bg-primary/10 blur-xl animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
