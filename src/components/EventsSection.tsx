import { Calendar, MapPin, Trophy, Clock, CheckCircle, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type EventStatus = "completed" | "live" | "upcoming";

interface Event {
  name: string;
  date: string;
  location: string;
  status: EventStatus;
  prize?: string;
  position?: string;
}

const events: Event[] = [
  {
    name: "HackTheNorth 2026",
    date: "Feb 13-15, 2026",
    location: "SRMIST, India",
    status: "live",
  },
  {
    name: "Conflont 2025",
    date: "Dec 27-28, 2025",
    location: "Helpers, Virtual",
    status: "completed",
    prize: "₹5,000",
    position: "Best UX",
  },
  // {
  //   name: "ETHGlobal Paris",
  //   date: "July 21-23, 2023",
  //   location: "Paris, France",
  //   status: "completed",
  //   prize: "$5,000",
  //   position: "Best UX",
  // },
  // {
  //   name: "HackMIT 2023",
  //   date: "Sept 16-17, 2023",
  //   location: "Cambridge, USA",
  //   status: "completed",
  //   prize: "$2,500",
  //   position: "Runner Up",
  // },
  // {
  //   name: "PennApps XXIV",
  //   date: "Oct 20-22, 2024",
  //   location: "Philadelphia, USA",
  //   status: "upcoming",
  // },
  {
    name: "Assam Hackmania 11.0",
    date: "Marc 13-15, 2026",
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
};

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Event Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From all-nighters to victory laps — our journey through the hackathon circuit.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {events.map((event, index) => {
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
                {/* Timeline Dot */}
                <div
                  className={cn(
                    "absolute left-0 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center",
                    event.status === "live"
                      ? "bg-red-500 glow-cyan"
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

                {/* Event Card */}
                <div
                  className={cn(
                    "gradient-border rounded-xl p-6 card-hover bg-card",
                    event.status === "live" && "glow-cyan"
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-mono font-bold">{event.name}</h3>
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

                  {/* Prize Info */}
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
