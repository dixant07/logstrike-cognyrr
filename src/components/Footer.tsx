import { Eye, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">VisionAI</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Leading provider of AI vision solutions for retail and industrial applications. 
              Transform your business with cutting-edge computer vision technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Retail Analytics</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Industrial Monitoring</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Security Systems</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 VisionAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;