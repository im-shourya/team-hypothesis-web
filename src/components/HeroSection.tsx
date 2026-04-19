import { ArrowDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 prism-bg" />
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />

      <div className="absolute inset-0 opacity-[0.03] kc-hero-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-pulse-glow">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-primary">
              DevNest Hackathon — Registrations Open!
            </span>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="/kernelcrew-logo.png"
              alt="KernelCrew"
              className="w-32 h-32 md:w-40 md:h-40 animate-float rounded-2xl"
            />
          </div>

          <h1
            className="glitch text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            data-text="KERNELCREW"
          >
            <span className="text-glow-violet">KERNELCREW</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            <span className="text-primary">&lt;</span>
            Build · Break · Innovate
            <span className="text-primary">/&gt;</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            An elite developer community pushing the boundaries of innovation.
            We turn ideas into reality and code into impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-violet font-mono group"
              asChild
            >
              <a href="#join">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join the Crew
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="#events">
                DevNest Hackathon
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "15+", label: "Hackathons" },
              { value: "8", label: "Wins" },
              { value: "₹50K+", label: "Prize Money" },
              { value: "100K+", label: "Lines of Code" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary text-glow-violet">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
