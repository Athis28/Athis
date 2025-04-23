
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] border border-white/20 rounded-full" />
        <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-white/20 rounded-full" />
        <div className="absolute w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border border-white/20 rounded-full" />
      </div>
      
      {/* Orbiting element */}
      <div className="absolute w-4 h-4 bg-accent rounded-full animate-orbit" 
           style={{ animationDuration: '15s' }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-accent font-space mb-4 tracking-wider animate-fade-in">AEROSPACE ENGINEERING</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-space text-white">
            <span className="block">Engineering the</span>
            <span className="text-accent">Future of Flight</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Specialized in advanced propulsion systems, aerodynamics, and spacecraft design 
            with a proven track record of innovative solutions for aerospace challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#experience"><Button className="btn-primary">Experience</Button></a>
            <a href="#contact"><Button variant="outline" className="border-accent hover:bg-accent/20 text-white">Contact Me</Button></a>
          </div>
          
          <a href="#about" className="absolute bottom-10 animate-bounce">
            <ArrowDown className="text-accent h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
