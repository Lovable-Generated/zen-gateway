import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import StarsParticles from "@/components/StarsParticles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 gradient-hero" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0 z-15">
        <StarsParticles />
      </div>
      <div className="absolute inset-0 z-16">
        <ParticleBackground />
      </div>
      
      {/* Floating Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            DreamWave
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-light">
            Transform Your Sleep & Meditation
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium music and soundscapes designed for deep relaxation, peaceful sleep, and mindful meditation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-medium rounded-2xl shadow-glow transition-glow group"
          >
            <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            Download on Google Play
          </Button>
          
          <div className="flex items-center gap-2 text-foreground/80">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.8 • 50K+ Downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;