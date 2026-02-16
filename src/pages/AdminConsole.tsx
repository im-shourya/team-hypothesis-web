import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { ShieldAlert, Send, Terminal, Database, Lock } from "lucide-react";

const AdminConsole = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date_time: "", 
    meet_link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Debug: Check if keys are actually loaded
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_uu1y4wh",
        {
          name: formData.name,
          email: formData.email, 
          to_email: formData.email,
          date_time: formData.date_time,
          meet_link: formData.meet_link,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("ENCRYPTED TRANSMISSION SENT");
      setFormData({ name: "", email: "", date_time: "", meet_link: "" });
    } catch (error: any) {
      console.error("FULL ERROR:", error);
      
      // 2. Show the REAL error message
      // If the error text is "The user... has not been authorized", it means bad Public Key.
      // If it says "Network Error", it is an Ad Blocker.
      toast.error("ERROR: " + (error.text || error.message || "Unknown"));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor (Grid & Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />

      <Card className="w-full max-w-lg border-primary/50 bg-card/50 backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)]">
        <CardHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full border border-primary/20">
              <ShieldAlert className="text-primary h-6 w-6 animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-xl font-mono tracking-widest text-primary">
                COMMAND_CONSOLE
              </CardTitle>
              <CardDescription className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Lock className="h-3 w-3" /> SECURE CONNECTION ESTABLISHED
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={sendInvite} className="space-y-6">
            
            {/* Candidate Details */}
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-mono text-muted-foreground">TARGET_IDENTITY (Name)</Label>
                <div className="relative">
                  <Terminal className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    name="name" 
                    placeholder="Candidate Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="pl-10 font-mono bg-background/50 border-primary/20 focus-visible:ring-primary/50" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-mono text-muted-foreground">COMMUNICATION_CHANNEL (Email)</Label>
                <div className="relative">
                  <Database className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="candidate@email.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="pl-10 font-mono bg-background/50 border-primary/20 focus-visible:ring-primary/50" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-mono text-muted-foreground">SYNCHRONIZATION_TIME (Date)</Label>
                <Input 
                  name="date_time" 
                  placeholder="Friday, 12th Feb @ 20:00 HOURS" 
                  value={formData.date_time} 
                  onChange={handleChange} 
                  className="font-mono bg-background/50 border-primary/20 focus-visible:ring-primary/50" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-mono text-muted-foreground">UPLINK_COORDINATES (Link)</Label>
                <Input 
                  name="meet_link" 
                  placeholder="https://meet.google.com/xyz-abc-123" 
                  value={formData.meet_link} 
                  onChange={handleChange} 
                  className="font-mono bg-background/50 border-primary/20 focus-visible:ring-primary/50 text-primary" 
                  required 
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 font-mono tracking-wider h-12"
            >
              {loading ? (
                "ENCRYPTING..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> INITIATE_PROTOCOL
                </>
              )}
            </Button>

          </form>
        </CardContent>
      </Card>
      
      {/* Footer Status */}
      <div className="absolute bottom-4 text-[10px] text-muted-foreground font-mono flex items-center gap-2 opacity-50">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        SYSTEM_STATUS: ONLINE
      </div>
    </div>
  );
};

export default AdminConsole;