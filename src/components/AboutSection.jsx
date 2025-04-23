
import { GraduationCap, Rocket, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-space-deep-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-primary/40 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22731c9e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                alt="Aerospace Engineer Portrait" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10">
              <Card className="card-gradient border-accent/20 shadow-xl animate-float">
                <CardContent className="p-4">
                  <div className="flex gap-3 items-center text-white">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Fresher</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Content column */}
          <div className="md:w-1/2">
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">Pushing the boundaries of Aerospace innovation</p>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="mb-4 text-white/80">
              I’m Athis Mithun, a graduate in Aerospace Engineering with a specialization in Unmanned Aerial Vehicles (UAVs). 
              This portfolio highlights my academic projects, technical skills, and hands-on training in aerodynamics, propulsion, and UAV systems. 
              With experience from organizations like NAL, Vaayusastra Aerospace, and Agni Aerodrome, along with proficiency in CATIA V5, Ansys, OpenVSP, Fusion 360 and AutoCAD, 
              I aim to contribute to innovative advancements in aerospace and drone technology.
              </p>
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent/20 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Education</h3>
                  <p className="text-sm text-white/70">B.Tech in Aerospace Engineering</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent/20 text-accent">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Specialization</h3>
                  <p className="text-sm text-white/70">Unmanned Aerial Vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
