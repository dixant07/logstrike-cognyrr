import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Eye className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">VisionAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#applications" className="text-muted-foreground hover:text-foreground transition-colors">
            Applications
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="professional" size="sm">
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;