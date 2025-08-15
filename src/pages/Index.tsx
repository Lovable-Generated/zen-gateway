import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppScreenshots from "@/components/AppScreenshots";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <AppScreenshots />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
