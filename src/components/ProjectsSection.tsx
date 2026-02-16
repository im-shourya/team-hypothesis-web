import { ExternalLink, Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "EcoTrack",
    description: "AI-powered carbon footprint tracker that gamifies sustainability. Won 1st place at TreeHacks 2024.",
    techStack: ["React", "TensorFlow", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    award: "1st Place — $10,000",
  },
  {
    name: "MindMesh",
    description: "Decentralized mental health platform connecting therapists globally through Web3.",
    techStack: ["Next.js", "Solidity", "IPFS", "Polygon"],
    liveUrl: "#",
    githubUrl: "#",
    award: "Best UX — $5,000",
  },
  {
    name: "CodeCollab",
    description: "Real-time collaborative IDE with AI pair programming assistant.",
    techStack: ["TypeScript", "WebSocket", "OpenAI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "FinFlow",
    description: "Personal finance dashboard with predictive analytics and investment insights.",
    techStack: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    award: "Runner Up — $2,500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Project Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What we've shipped. Each project born from 36 hours of pure focus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="gradient-border rounded-xl p-6 card-hover bg-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-mono font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {project.award && (
                    <div className="flex items-center gap-2 mt-2">
                      <Trophy size={16} className="text-yellow-500" />
                      <span className="text-sm font-mono text-yellow-500">
                        {project.award}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-primary/30 text-primary font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
            <Github className="mr-2" size={18} />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
