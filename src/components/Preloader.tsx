import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("INITIALIZING...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const texts = [
      "INITIALIZING KERNEL...",
      "LOADING CREW MODULES...",
      "VERIFYING SECURITY PROTOCOLS...",
      "ESTABLISHING SECURE CONNECTION...",
      "KERNEL READY. ACCESS GRANTED."
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex++;
      if (textIndex < texts.length) {
        setText(texts[textIndex]);
      }
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(textInterval);
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0515] flex flex-col items-center justify-center font-mono">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        <img
          src="/kernelcrew-logo.png"
          alt="KernelCrew"
          className="relative w-24 h-24 rounded-xl animate-bounce"
        />
      </div>

      <div className="h-8 mb-4 text-primary/80 text-lg tracking-widest">
        &gt; {text}<span className="animate-blink">_</span>
      </div>

      <div className="w-64 h-2 bg-muted/20 rounded-full overflow-hidden border border-primary/20">
        <div
          className="h-full bg-primary shadow-[0_0_15px_hsl(270,80%,55%)] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 text-xs text-muted-foreground">
        {progress}% COMPLETE
      </div>
    </div>
  );
};

export default Preloader;