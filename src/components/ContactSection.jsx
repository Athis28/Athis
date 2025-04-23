import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      access_key: "83057330-9909-4d97-843d-3627ba184309",
      first_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I’ll respond as soon as possible.",
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: ''
        });
      } else {
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-space-blue to-space-deep-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading">Let's discuss your project or opportunity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card/20 backdrop-blur-sm p-8 rounded-xl space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/20 text-accent rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-white/70">athismithun@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/20 text-accent rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-white/70">India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/20 text-accent rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-white/70">+91 70948 64025</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/20 backdrop-blur-sm p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm">Name</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm">Phone</label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm">Subject</label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
