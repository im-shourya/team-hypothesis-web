import { Calendar, MapPin, Trophy, Clock, CheckCircle, Radio, Users, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EventStatus = "completed" | "live" | "upcoming" | "featured";

interface Event {
  name: string;
  date: string;
  location: string;
  status: EventStatus;
  prize?: string;
  position?: string;
  description?: string;
  tracks?: string[];
  fee?: string;
  teamSize?: string;
  registerUrl?: string;
  posterImage?: string;
}

const events: Event[] = [
  {
    name: "DevNest — 48hrs Hackathon",
    date: "May 29-31, 2026",
    location: "KernelCrew HQ",
    status: "featured",
    description: "KernelCrew's flagship hackathon. 48 hours of building, breaking, and innovating across 5 exciting tracks.",
    tracks: ["Edu Tech", "Fintech", "Health", "AIM/AI", "Open Innovation"],
    fee: "₹30 per team",
    teamSize: "2-4 members",
    registerUrl: "https://www.kernelcrew.dev/devnest",
    posterImage: "/devnest-poster.png",
  },
  {
    name: "HackTheNorth 2026",
    date: "Feb 13-15, 2026",
    location: "SRMIST, India",
    status: "completed",
  },
  {
    name: "Conflont 2025",
    date: "Dec 27-28, 2025",
    location: "Helpers, Virtual",
    status: "completed",
    prize: "₹5,000",
    position: "Best UX",
  },
  {
    name: "Assam Hackmania 11.0",
    date: "Mar 13-15, 2026",
    location: "Assam, India",
    status: "upcoming",
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle,
    className: "bg-muted text-muted-foreground",
  },
  live: {
    label: "Live Now",
    icon: Radio,
    className: "bg-red-500/20 text-red-400 animate-pulse",
  },
  upcoming: {
    label: "Upcoming",
    icon: Clock,
    className: "bg-primary/20 text-primary",
  },
  featured: {
    label: "🔥 Featured",
    icon: Radio,
    className: "bg-primary/20 text-primary animate-pulse",
  },
};

const EventsSection = () => {
  const featuredEvent = events.find(e => e.status === "featured");
  const timelineEvents = events.filter(e => e.status !== "featured");

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-primary text-glow-violet">Event Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From all-nighters to victory laps — our journey through the hackathon circuit.
          </p>
        </div>

        {featuredEvent && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="gradient-border rounded-2xl overflow-hidden bg-card glow-violet">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredEvent.posterImage}
                    alt={featuredEvent.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <Badge className="bg-primary/20 text-primary w-fit mb-4 font-mono">
                    🔥 FLAGSHIP EVENT
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-glow-violet">
                    {featuredEvent.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{featuredEvent.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {featuredEvent.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-primary" />
                      {featuredEvent.teamSize}
                    </span>
                    <span className="flex items-center gap-1">
                      <IndianRupee size={14} className="text-primary" />
                      {featuredEvent.fee}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredEvent.tracks?.map((track) => (
                      <Badge key={track} variant="outline" className="border-primary/30 text-primary font-mono text-xs">
                        {track}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-violet font-mono w-fit"
                    asChild
                  >
                    <a href={featuredEvent.registerUrl} target="_blank" rel="noopener noreferrer">
                      Register Now →
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto relative">
          <div className="timeline-line" />

          {timelineEvents.map((event, index) => {
            const statusInfo = statusConfig[event.status];
            const StatusIcon = statusInfo.icon;

            return (
              <div
                key={event.name}
                className={cn(
                  "relative pl-12 pb-12 last:pb-0",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={cn(
                    "absolute left-0 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center",
                    event.status === "live"
                      ? "bg-red-500 glow-violet"
                      : event.prize
                      ? "bg-yellow-500"
                      : "bg-primary"
                  )}
                >
                  {event.prize ? (
                    <Trophy size={14} className="text-yellow-900" />
                  ) : (
                    <StatusIcon size={14} className="text-primary-foreground" />
                  )}
                </div>

                <div
                  className={cn(
                    "gradient-border rounded-xl p-6 card-hover bg-card",
                    event.status === "live" && "glow-violet"
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-display font-bold">{event.name}</h3>
                    <Badge className={statusInfo.className}>
                      <StatusIcon size={12} className="mr-1" />
                      {statusInfo.label}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>

                  {event.prize && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                      <Trophy className="text-yellow-500" size={20} />
                      <div>
                        <span className="font-mono font-bold text-yellow-500 text-glow-gold">
                          {event.position}
                        </span>
                        <span className="text-muted-foreground"> — </span>
                        <span className="font-mono text-yellow-500">{event.prize}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
