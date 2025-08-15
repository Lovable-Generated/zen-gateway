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
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-bounce-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 animate-text-shimmer leading-none tracking-tight">
            DreamWave
          </h1>
          <div className="relative mb-6">
            <p className="text-2xl md:text-4xl lg:text-5xl text-foreground font-bold mb-2 animate-glow-pulse">
              Transform Your Sleep
            </p>
            <p className="text-xl md:text-3xl lg:text-4xl bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent font-semibold">
              & Meditation Experience
            </p>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Premium music and soundscapes engineered for deep relaxation, peaceful sleep, and mindful meditation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="btn-premium gradient-button hover:shadow-intense text-primary-foreground px-12 py-6 text-xl font-bold rounded-3xl transition-bounce hover:scale-110 group relative overflow-hidden"
          >
            <Download className="mr-4 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
            Download on Google Play
            <div className="absolute inset-0 rounded-3xl bg-gradient-intense opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          
          <div className="flex items-center gap-3 text-foreground/90 backdrop-glass rounded-2xl px-6 py-4 border border-border/30">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span className="text-lg font-bold">4.8 • 50K+ Downloads</span>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-accent animate-bounce opacity-70" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-primary-glow animate-bounce opacity-60" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 left-16 w-3 h-3 rounded-full bg-accent-glow animate-bounce opacity-80" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-12 w-5 h-5 rounded-full bg-primary-intense animate-bounce opacity-50" style={{ animationDelay: '2.5s' }} />
      </div>
    </section>
  );
};

export default Hero;