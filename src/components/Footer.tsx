import { Button } from "@/components/ui/button";
import { Download, Mail, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start Your Journey to Better Sleep
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download DreamWave today and discover the power of peaceful sleep and mindful meditation
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-medium rounded-2xl shadow-glow transition-glow"
          >
            <Download className="mr-3 h-6 w-6" />
            Download Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">DreamWave</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium sleep and meditation music app designed to transform your wellbeing through the power of sound.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              hello@dreamwave.app
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 mt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DreamWave. All rights reserved. Made with ♥ for better sleep and mindfulness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;