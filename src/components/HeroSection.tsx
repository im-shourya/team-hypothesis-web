import { ArrowDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 prism-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Live Status Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-pulse-glow">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-primary">
              Coming Soon!
            </span>
          </div>

          {/* Main Title with Glitch Effect */}
          <h1 
            className="glitch text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6"
            data-text="TEAM HYPOTHESIS"
          >
            <span className="text-glow-cyan">TEAM HYPOTHESIS</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            <span className="text-primary">&lt;</span>
            Hack. Build. Win.
            <span className="text-primary">/&gt;</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            An elite hackathon squad pushing the boundaries of innovation. 
            We turn caffeine into code and ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-mono group"
              asChild
            >
              <a href="#join">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join the Squad
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="#projects">
                View Our Work
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "15+", label: "Hackathons" },
              { value: "8", label: "Wins" },
              { value: "₹50K+", label: "Prize Money" },
              { value: "100K+", label: "Lines of Code" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow-cyan">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
