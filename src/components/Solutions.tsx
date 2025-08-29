import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Factory, Shield, BarChart3, Users, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "Retail Analytics",
      description: "Customer behavior analysis, inventory management, and loss prevention through advanced computer vision.",
      features: ["Customer Flow Analysis", "Product Interaction Tracking", "Theft Detection", "Queue Management"],
      badge: "Popular"
    },
    {
      icon: Factory,
      title: "Industrial Monitoring",
      description: "Quality control, safety compliance, and process optimization for manufacturing environments.",
      features: ["Quality Inspection", "Safety Monitoring", "Equipment Tracking", "Process Analytics"],
      badge: "Enterprise"
    },
    {
      icon: Shield,
      title: "Security & Access",
      description: "Intelligent surveillance and access control systems with real-time threat detection.",
      features: ["Face Recognition", "Anomaly Detection", "Access Control", "Perimeter Security"],
      badge: "Secure"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI Vision for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From retail environments to industrial facilities, our AI vision solutions 
            provide actionable insights and automated monitoring capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative overflow-hidden border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="outline">{solution.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 p-8 bg-gradient-subtle rounded-2xl border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Active Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </div>

        {/* Request Demo Button */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;