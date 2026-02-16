import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import EventsSection from "@/components/EventsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import NavbarR from "@/components/Rec/NavbarRecruitment";
import Footer from "@/components/Footer";
import RecruitmentSection from "@/components/Rec/RecruitmentForm";

const Index = () => {
  useEffect(() => {
    document.title = "Team Hypothesis - Recruitment";
    
    // Reset when leaving
    return () => {
      document.title = "Team Hypothesis";
    };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navbar />
      <HeroSection />
      <FoundersSection />
      <EventsSection />
      <AchievementsSection />
      <ProjectsSection />
      <TechStackSection />
      <JoinSection />*/
      }
      <NavbarR />
      < RecruitmentSection/>
      <ContactSection /> 
      <Footer />
    </div>
  );
};

export default Index;
