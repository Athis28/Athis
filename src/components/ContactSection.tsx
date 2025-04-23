
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email",
      details: "contact@AthisMithun.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      title: "Location",
      details: "Houston, TX, USA",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-space-blue to-space-deep-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading">Let's discuss your aerospace needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card-gradient border border-white/10 p-6 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card/50 border-white/20"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card/50 border-white/20"
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-card/50 border-white/20"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card/50 border-white/20 resize-none"
                />
                <Button type="submit" disabled={isSubmitting} className="btn-primary">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-white font-space">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-3 rounded-full bg-accent/20">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                    <p className="text-white/70">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {['linkedin', 'twitter', 'github'].map((platform) => (
                  <a
                    key={platform}
                    href={`#${platform}`}
                    className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors duration-300"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
