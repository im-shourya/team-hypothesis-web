import { useEffect } from "react";
import NavbarR from "@/components/Rec/NavbarRecruitment";
import RecruitmentSection from "@/components/Rec/RecruitmentForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "KernelCrew - Recruitment";

    return () => {
      document.title = "KernelCrew — Build · Break · Innovate";
    };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarR />
      <RecruitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
