import { Card } from "@/components/ui/card";
import { Timer, Moon, Music, Sparkles, Brain, Heart } from "lucide-react";
import meditationIcon from "@/assets/meditation-icon.jpg";
import sleepIcon from "@/assets/sleep-icon.jpg";
import musicIcon from "@/assets/music-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: <Moon className="h-8 w-8" />,
      image: sleepIcon,
      title: "Deep Sleep",
      description: "Scientifically crafted soundscapes to help you fall asleep faster and sleep deeper",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      image: meditationIcon,
      title: "Mindful Meditation",
      description: "Guided sessions and ambient sounds for focused meditation and mindfulness practice",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Music className="h-8 w-8" />,
      image: musicIcon,
      title: "Premium Audio",
      description: "High-quality, immersive audio experiences designed by sound therapy experts",
      color: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Smart Timer",
      description: "Customizable sleep and meditation timers that gradually fade out for peaceful transitions",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Personalized",
      description: "AI-powered recommendations based on your sleep patterns and meditation preferences",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness Tracking",
      description: "Monitor your sleep quality and meditation progress with detailed insights",
      color: "from-red-500/20 to-rose-500/20"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-text-shimmer">
            Why Choose DreamWave?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Experience the perfect blend of technology and tranquility with features designed for your wellbeing
          </p>
          <div className="w-32 h-1 gradient-accent mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-10 gradient-card border-border/50 backdrop-glass hover:shadow-intense transition-all duration-700 hover:-translate-y-4 group animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-8">
                {feature.image ? (
                  <div className="w-20 h-20 rounded-3xl overflow-hidden mb-6 shadow-intense group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-intense group-hover:shadow-glow transition-all duration-500 group-hover:rotate-12`}>
                    <div className="text-foreground group-hover:scale-125 transition-transform duration-500">
                      {feature.icon}
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground group-hover:text-primary-glow transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-500">
                {feature.description}
              </p>

              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;