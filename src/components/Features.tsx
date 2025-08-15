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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose DreamWave?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of technology and tranquility with features designed for your wellbeing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card border-border/50 backdrop-glass hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative mb-6">
                {feature.image ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-card">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-card group-hover:shadow-glow transition-all duration-500`}>
                    <div className="text-foreground group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;