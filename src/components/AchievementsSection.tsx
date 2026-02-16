import { Trophy, Star, Award, Zap, Code, Coffee } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Place Wins",
    value: "4",
    color: "text-yellow-500",
    glow: "glow-gold",
  },
  {
    icon: Award,
    title: "Best UI/UX",
    value: "3",
    color: "text-primary",
    glow: "glow-cyan",
  },
  {
    icon: Star,
    title: "Most Innovative",
    value: "2",
    color: "text-secondary",
    glow: "glow-purple",
  },
  {
    icon: Zap,
    title: "Best Use of API",
    value: "5",
    color: "text-primary",
    glow: "glow-cyan",
  },
];

const funStats = [
  { icon: Code, label: "Lines of Code", value: "127,843" },
  { icon: Coffee, label: "Cups of Coffee", value: "2,547" },
  { icon: Trophy, label: "Total Prize Money", value: "₹52,500" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 prism-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Trophy Cabinet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Badges earned, prizes won, and countless all-nighters survived.
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="gradient-border rounded-xl p-6 text-center card-hover bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-4 ${achievement.glow}`}
                >
                  <Icon size={32} className={achievement.color} />
                </div>
                <div className={`text-4xl font-mono font-bold ${achievement.color} mb-2`}>
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {achievement.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Stats Counter */}
        <div className="max-w-3xl mx-auto">
          <div className="gradient-border rounded-xl p-8 bg-card">
            <h3 className="text-xl font-mono font-bold text-center mb-8 text-primary">
              {"<"} By The Numbers {"/>"}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {funStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="mx-auto mb-3 text-primary" size={28} />
                    <div className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
