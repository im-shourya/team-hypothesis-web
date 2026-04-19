import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 diamond-shape bg-primary" />
            <span className="font-mono font-bold text-sm">Team Hypothesis</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> and lots of coffee
          </p>

          {/* Year */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Team Hypothesis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
