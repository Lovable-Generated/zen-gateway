import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "DreamWave has completely transformed my sleep routine. I fall asleep faster and wake up feeling more refreshed than ever.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The meditation sessions are incredible. Perfect for my busy lifestyle - I can find peace anywhere, anytime.",
      location: "San Francisco, CA"
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "As someone who struggled with insomnia, this app has been a game-changer. The sleep stories are absolutely magical.",
      location: "London, UK"
    },
    {
      name: "David Rodriguez",
      rating: 5,
      text: "The audio quality is outstanding and the variety of sounds keeps me engaged. Highly recommend for anyone seeking better sleep.",
      location: "Toronto, CA"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Loved by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of peaceful sleepers and mindful meditators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card border-border/50 backdrop-glass hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/30">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Downloads</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.8</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Better Sleep Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;