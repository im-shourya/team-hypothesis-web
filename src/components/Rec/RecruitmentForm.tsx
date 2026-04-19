import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Link as LinkIcon, Send, Terminal, Github } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; 
import { toast } from "sonner"; 
import emailjs from "@emailjs/browser";

const RecruitmentSection = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("INITIALIZING...");

  // 🔄 Cycle through hacker-style text while loading
  useEffect(() => {
    if (!loading) return;
    
    const messages = [
      "ESTABLISHING SECURE UPLINK...",
      "COMPILING ASSETS...",
      "ENCRYPTING PAYLOAD...",
      "BYPASSING FIREWALL...",
      "SENDING PACKETS...",
      "AWAITING SERVER RESPONSE..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(messages[i % messages.length]);
      i++;
    }, 600); // Change text every 600ms

    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Extract values for EmailJS
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const resume = formData.get('resume') as string;

    setLoading(true);

    try {
        // --- STEP A: Save to Database (Supabase) ---
        const { error } = await supabase
            .from('applicants')
            .insert([{ name, email, resume_url: resume }]);

        if (error) throw error;

        // --- STEP B: Send Email (EmailJS) ---
        // ✅ YOUR REAL KEYS ARE PRESERVED HERE:
        const SERVICE_ID = "service_wiu6bd5";   
        const TEMPLATE_ID = "template_n6wwvck"; 
        const PUBLIC_KEY = "ctd3uGabQPSENoK2I";   

        await emailjs.send(
            SERVICE_ID, 
            TEMPLATE_ID, 
            {
                name: name,      
                email: email,    
                resume: resume,  
                to_email: email, 
            },
            PUBLIC_KEY
        );

        // --- Success! ---
        toast.success("MISSION SUCCESS: Application uplink complete.");
        form.reset(); 

    } catch (error: any) {
        console.error("Error:", error);
        toast.error("MISSION FAILED: " + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-3">
            <span className="text-primary text-glow-cyan">Join Protocol</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            /root/recruitment/apply --force
          </p>
        </div>

        {/* Added 'relative' here so the overlay stays inside the box */}
        <div className="gradient-border p-1 bg-card rounded-xl relative">
          
          {/* 🔥 CYBERPUNK LOADING OVERLAY */}
          {loading && (
            <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-center p-4">
              <div className="relative mb-4">
                <div className="h-16 w-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal className="text-primary h-6 w-6 animate-pulse" />
                </div>
              </div>
              <div className="font-mono text-primary text-lg tracking-widest animate-pulse">
                &gt; {loadingText}<span className="animate-blink">_</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-mono">
                DO NOT CLOSE TERMINAL
              </p>
            </div>
          )}

          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-[10px] h-full">
            <div className="flex items-center gap-2 mb-8 text-primary/80">
              <Terminal size={18} />
              <span className="font-mono text-xs tracking-wider uppercase">Initialize Application Sequence</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Agent Name
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Tony Stark" 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Comms Channel
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="mail@example.com" 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono transition-all duration-300"
                  />
                </div>
              </div>

              {/* Resume Input */}
              <div className="space-y-2">
                <label htmlFor="resume" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Source Code / Resume
                </label>
                <div className="relative group">
                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="resume" 
                    name="resume" 
                    type="url" 
                    placeholder="https://github.com/..." 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono transition-all duration-300"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full font-mono text-lg h-12 mt-4 relative overflow-hidden group"
                disabled={loading}
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    "PROCESSING..."
                  ) : (
                    <>
                      EXECUTE <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </Button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-border flex-1" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Or authenticate via</span>
              <div className="h-px bg-border flex-1" />
            </div>

            <Button variant="outline" className="w-full mt-6 border-primary/20 hover:bg-primary/10 hover:text-primary font-mono group transition-all duration-300">
              <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              GitHub Auth
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;