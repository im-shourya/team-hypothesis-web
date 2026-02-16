import { useState } from "react";
import { Github, Linkedin, Twitter, MessageCircle, Mail, Check, Copy, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const socials = [
  {
    name: "Discord",
    icon: MessageCircle,
    url: "#",
    handle: "Team Hypothesis",
    color: "hover:text-indigo-400",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "#",
    handle: "@team-hypothesis",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    handle: "Team Hypothesis",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#",
    handle: "@teamhypothesis",
    color: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    handle: "@teamdiamond",
    color: "hover:text-purple-300",
  }
];

const email = "hello@teamhypothesis.dev";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 prism-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Want to collaborate, sponsor, or just say hi? We're always open to new connections.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Email with Copy */}
          <div className="gradient-border rounded-xl p-8 bg-card text-center mb-12">
            <Mail className="mx-auto mb-4 text-primary" size={32} />
            <p className="text-sm text-muted-foreground mb-2">Drop us a line at</p>
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 mx-auto font-mono text-xl md:text-2xl text-primary hover:text-glow-cyan transition-all"
            >
              {email}
              {copied ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
            <p className="text-xs text-muted-foreground mt-2">Click to copy</p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className={`group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-hover ${social.color}`}
                >
                  <Icon size={28} className="transition-colors" />
                  <div className="text-center">
                    <div className="font-mono font-semibold text-sm">{social.name}</div>
                    <div className="text-xs text-muted-foreground">{social.handle}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
