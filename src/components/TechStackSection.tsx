const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Solidity", category: "Web3" },
];

const categories = ["Frontend", "Backend", "Language", "Database", "Styling", "Design", "DevOps", "Cloud", "AI/ML", "Web3"];

const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 prism-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Our Toolbox</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies we wield to build award-winning projects.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default card-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.slice(0, 6).map((category) => (
            <div key={category} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
