import { Github, Sparkles, Users, Code, Pizza, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const perks = [
  {
    icon: Code,
    title: "Private Repos",
    description: "Access to our internal tools and boilerplates",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Learn from experienced hackathon veterans",
  },
  {
    icon: BookOpen,
    title: "Resources",
    description: "Curated learning paths and tutorials",
  },
  {
    icon: Pizza,
    title: "Pizza Fund",
    description: "Because you can't code on an empty stomach",
  },
];

const neededSkills = [
  "React", "Python", "Figma", "Node.js", "Machine Learning", 
  "UI/UX Design", "Solidity", "DevOps"
];

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Join the Squad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're always looking for passionate hackers who love building cool stuff.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Why Join */}
          <div>
            <h3 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
              <Sparkles className="text-primary" size={20} />
              Why Join Team Hypothesis?
            </h3>

            <div className="grid gap-4">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold mb-1">{perk.title}</h4>
                      <p className="text-sm text-muted-foreground">{perk.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: We Need */}
          <div>
            <h3 className="text-xl font-mono font-bold mb-6">
              <span className="text-primary">{"<"}</span>
              Skills We're Looking For
              <span className="text-primary">{"/>"}</span>
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {neededSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-primary/50 text-primary font-mono px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="gradient-border rounded-xl p-8 bg-card text-center">
              <p className="text-muted-foreground mb-6">
                Think you've got what it takes? Show us your code.
              </p>
              <a href="/recruitment" target="_blank" rel="noopener noreferrer">
                <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-mono w-full sm:w-auto"
                >
                <Github className="mr-2" size={20} />
                Apply via GitHub
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground mt-4">
                We'll review your repos and reach out within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
