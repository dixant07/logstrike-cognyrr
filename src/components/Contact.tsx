import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const subject = encodeURIComponent("Enquiry regarding Vision Solution");
      const body = encodeURIComponent(
        `Enquiry Details:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Industry: ${formData.industry}
Message: ${formData.message || 'N/A'}

---
Sent via Logstrike website contact form`
      );
      
      const mailtoLink = `mailto:ceo@log-strike.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how our AI vision solutions can revolutionize your operations. 
            Schedule a demo or get in touch with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle>Request a Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name *</label>
                  <Input 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name *</label>
                  <Input 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email *</label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company *</label>
                <Input 
                  placeholder="Your Company" 
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Industry *</label>
                <Input 
                  placeholder="Retail, Manufacturing, etc." 
                  value={formData.industry}
                  onChange={(e) => handleChange('industry', e.target.value)}
                  className={errors.industry ? "border-destructive" : ""}
                />
                {errors.industry && <p className="text-xs text-destructive">{errors.industry}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your specific needs and requirements..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </div>
              
              <Button 
                variant="hero" 
                className="w-full"
                onClick={handleSubmit}
              >
                Request Demo
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">ceo@log-strike.com</div>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div> */}
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-muted-foreground">
                        Parel, Mumbai<br />
                        Maharashtra 400012
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border bg-gradient-subtle">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Logstrike?
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">Industry-leading accuracy rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">Custom solutions for your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">Proven ROI within 6 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Schedule a Live Demo
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  See our technology in action with a personalized demonstration.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.open('https://calendly.com/shreychhedareal/30min', '_blank')}
                >
                  Book a Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;