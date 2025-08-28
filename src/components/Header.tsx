import { Button } from "@/components/ui/button";
import LogstrikeLogo from "../assets/Logstrike-Logo-04.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-0.1 bg-transparent rounded-lg">
            <img src={LogstrikeLogo} alt="Logstrike" className="h-12 w-12" />
          </div>
          <span className="text-xl font-bold text-foreground">Logstrike</span>
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
          <Button 
            variant="professional" 
            size="sm"
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
    </header>
  );
};

export default Header;