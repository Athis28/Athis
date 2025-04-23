
import { Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Rocket className="h-6 w-6 text-accent mr-2" />
            <span className="text-xl font-bold font-space">AthisMithun</span>
          </div>
          
          <div className="text-sm text-white/60">
            © {currentYear} Aerospace Engineer. All rights reserved.
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Navigation</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="text-white/60 hover:text-accent">Home</a>
                <a href="#about" className="text-white/60 hover:text-accent">About</a>
                <a href="#skills" className="text-white/60 hover:text-accent">Skills</a>
                <a href="#experience" className="text-white/60 hover:text-accent">Experience</a>
                <a href="#contact" className="text-white/60 hover:text-accent">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Contact</h4>
              <p className="text-white/60 mb-2">contact@AthisMithun.com</p>
              <p className="text-white/60">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Social</h4>
              <div className="flex space-x-4">
                <a href="#linkedin" className="text-white/60 hover:text-accent">LinkedIn</a>
                <a href="#twitter" className="text-white/60 hover:text-accent">Twitter</a>
                <a href="#github" className="text-white/60 hover:text-accent">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
