import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/kernelcrew-logo.png"
              alt="KernelCrew"
              className="w-8 h-8 rounded-md"
            />
            <span className="font-display font-bold text-sm tracking-wider">KernelCrew</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> and lots of coffee
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} KernelCrew
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
