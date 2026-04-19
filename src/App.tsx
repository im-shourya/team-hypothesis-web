import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { useState } from "react"; // 👈 Import useState
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Recruitment from "./pages/recruitment";
import AdminConsole from "./pages/AdminConsole";
// 👇 Import your Preloader (Make sure you created the file from the previous step!)
import Preloader from "./components/Preloader"; 

const queryClient = new QueryClient();

const App = () => {
  // 1. State to control the loading screen
  const [loading, setLoading] = useState(true);

  // 2. Show Preloader first
  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  // 3. Show Website after loading is complete
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/admin-command-77" element={<AdminConsole />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );

};

export default App;