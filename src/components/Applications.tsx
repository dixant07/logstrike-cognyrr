import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon } from "lucide-react";
import IndustrialSafetyVideo from "../assets/industrial_safety.mp4"
import PharmaTabletDefectsVideo from "../assets/pharma_tablet_defets.mp4"
import RetailAnalyticsImage from "../assets/retail analytics.png";
import SecuritySurveillanceImage from "../assets/security_suveillance.png";
import SupermarketVideo from "../assets/supermarket.mp4";
import InventoryImage from "../assets/inventory.png"

const Applications = () => {
  // Placeholder applications - ready for your videos and images
  const applications = [
    {
      title: "Retail Customer Analytics",
      description: "Real-time customer behavior tracking and heatmap generation in retail environments.",
      type: "image",
      category: "Retail",
      placeholder: "Your retail demo video will be showcased here"
    },
    {
      title: "Industrial Quality Control",
      description: "Automated defect detection and quality assurance in manufacturing lines.",
      type: "video", 
      category: "Industrial",
      placeholder: "Your industrial demo video will be showcased here"
    },
    {
      title: "Security Surveillance",
      description: "Advanced threat detection and perimeter monitoring systems.",
      type: "image",
      category: "Security",
      placeholder: "Your security solution images will be displayed here"
    },
    {
      title: "Inventory Management",
      description: "Automated stock tracking and inventory optimization solutions.",
      type: "image",
      category: "Retail",
      placeholder: "Your inventory management visuals will be shown here"
    },
    {
      title: "Safety Compliance",
      description: "Real-time safety monitoring and compliance verification systems.",
      type: "video",
      category: "Industrial", 
      placeholder: "Your safety monitoring demo will be featured here"
    },
    {
      title: "People Counting",
      description: "Accurate foot traffic analysis and occupancy monitoring.",
      type: "video",
      category: "Analytics",
      placeholder: "Your people counting solution images will be displayed here"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Applications in Action
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            See Our AI Vision Solutions at Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore real-world implementations of our AI vision technology across 
            different industries and use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="overflow-hidden border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
              {/* Media placeholder */}
              <div className="relative aspect-video bg-muted border-b border-border flex items-center justify-center overflow-hidden">
                {app.title === "Safety Compliance" ? (
                  <video 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src={IndustrialSafetyVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : app.title === "Industrial Quality Control" ? (
                  <video 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src={PharmaTabletDefectsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : app.title === "People Counting" ? (
                  <div className="w-full h-full">
                    <video 
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    >
                      <source src={SupermarketVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : app.title === "Retail Customer Analytics" ? (
                  <div className="w-full h-full">
                    <img 
                      src={RetailAnalyticsImage} 
                      alt="Retail Customer Analytics" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : app.title === "Security Surveillance" ? (
                  <div className="w-full h-full">
                    <img 
                      src={SecuritySurveillanceImage} 
                      alt="Security Surveillance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : app.title === "Inventory Management" ? (
                  <div className="w-full h-full">
                    <img 
                      src={InventoryImage} 
                      alt="Inventory Management" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    {app.type === "video" ? (
                      <div className="p-4 bg-primary/10 rounded-full">
                        <Play className="h-8 w-8 text-primary" />
                      </div>
                    ) : (
                      <div className="p-4 bg-primary/10 rounded-full">
                        <ImageIcon className="h-8 w-8 text-primary" />
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground px-4">
                      {app.placeholder}
                    </p>
                  </div>
                )}
                
                {/* Play button overlay for videos */}
                {app.type === "video" && (
                  <Button 
                    variant="professional" 
                    size="icon"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {app.category}
                    </Badge>
                    <Badge variant={app.type === "video" ? "default" : "secondary"} className="text-xs">
                      {app.type === "video" ? "Video Demo" : "Image Gallery"}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {app.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Applications;