import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
        "hover:scale-110",
        isDark ? "glow-cyan" : "border border-primary"
      )}
      aria-label="Toggle theme"
    >
      {/* Diamond shape */}
      <div
        className={cn(
          "w-6 h-6 transition-all duration-500 diamond-shape",
          isDark
            ? "bg-primary animate-pulse-glow"
            : "bg-transparent border-2 border-primary"
        )}
      />
      
      {/* Glow effect for dark mode */}
      {isDark && (
        <div className="absolute inset-0 rounded-lg bg-primary/10 blur-xl animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
