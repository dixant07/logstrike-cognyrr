import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              AI Vision Technology
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Business </span>
                with AI Vision
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Advanced computer vision solutions for retail and industrial applications. 
                Automate processes, enhance security, and gain valuable insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button variant="professional" size="lg" className="text-base">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold">RetailCorp</div>
                <div className="text-lg font-semibold">IndustryMax</div>
                <div className="text-lg font-semibold">TechFlow</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <VideoCarousel />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-4 bg-background rounded-xl shadow-elevated border border-border">
              <div className="text-2xl font-bold text-primary">99.8%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-4 bg-background rounded-xl shadow-elevated border border-border">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;