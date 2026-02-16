import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import EventsSection from "@/components/EventsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FoundersSection />
      <EventsSection />
      <AchievementsSection />
      <ProjectsSection />
      <TechStackSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
