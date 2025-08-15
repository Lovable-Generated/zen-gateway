import { Card } from "@/components/ui/card";

const AppScreenshots = () => {
  // Placeholder screenshots - you'll replace these with actual app screenshots
  const screenshots = [
    {
      title: "Sleep Stories",
      description: "Immersive bedtime stories with calming narration",
      placeholder: "bg-gradient-to-br from-blue-600/30 to-purple-600/30"
    },
    {
      title: "Meditation Sessions", 
      description: "Guided meditation with breathing exercises",
      placeholder: "bg-gradient-to-br from-purple-600/30 to-pink-600/30"
    },
    {
      title: "Sound Library",
      description: "Curated collection of nature sounds and music",
      placeholder: "bg-gradient-to-br from-teal-600/30 to-blue-600/30"
    },
    {
      title: "Sleep Tracking",
      description: "Monitor your sleep patterns and quality",
      placeholder: "bg-gradient-to-br from-green-600/30 to-teal-600/30"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience DreamWave
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a world of peaceful sounds and guided experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index}
              className="overflow-hidden gradient-card border-border/50 backdrop-glass hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Placeholder for app screenshot */}
              <div className={`aspect-[9/16] ${screenshot.placeholder} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="text-center z-10 p-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 rounded-full bg-primary animate-glow-pulse" />
                  </div>
                  <p className="text-white/90 font-medium">
                    App Screenshot
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            📱 Screenshots will be updated with actual app interface soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;