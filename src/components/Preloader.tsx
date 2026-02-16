import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("INITIALIZING...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Text Animation Sequence
    const texts = [
      "INITIALIZING KERNEL...",
      "LOADING MODULES...",
      "VERIFYING SECURITY PROTOCOLS...",
      "ESTABLISHING SECURE CONNECTION...",
      "ACCESS GRANTED."
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex++;
      if (textIndex < texts.length) {
        setText(texts[textIndex]);
      }
    }, 800);

    // 2. Progress Bar Animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(textInterval);
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Wait a bit before finishing
          return 100;
        }
        return prev + 2; // Speed of the bar
      });
    }, 40);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#020817] flex flex-col items-center justify-center font-mono">
      {/* Glitch Effect Container */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        <Terminal size={64} className="relative text-primary animate-bounce" />
      </div>

      {/* Typing Text */}
      <div className="h-8 mb-4 text-primary/80 text-lg tracking-widest">
        &gt; {text}<span className="animate-blink">_</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-2 bg-muted/20 rounded-full overflow-hidden border border-primary/20">
        <div 
          className="h-full bg-primary shadow-[0_0_15px_#22d3ee] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-2 text-xs text-muted-foreground">
        {progress}% COMPLETE
      </div>
    </div>
  );
};

export default Preloader;