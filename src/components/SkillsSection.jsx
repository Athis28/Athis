
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");
  
  const technicalSkills = [
    { name: "Propulsion Systems", level: 75 },
    { name: "Aerodynamic Analysis", level: 75 },
    { name: "Aircraft Design", level: 75 }
  ];
  
  const softwareSkills = [
    { name: "OpenVSP", level: 92 },
    { name: "Fuion 360", level: 90 },
    { name: "Catia", level: 85 },
    { name: "Ansys CFD", level: 80 },
    { name: "AutoCAD", level: 75 },
    { name: "Python", level: 60 }
  ];
  
  const softSkills = [
    "Team Leadership", 
    "Project Management", 
    "Technical Writing", 
    "Public Speaking", 
    "Communication", 
    "Collaboration",
    "Tutoring"
  ];
  
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-space-deep-blue to-space-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Skills</h2>
          <p className="section-subheading">Expertise developed over years of innovation</p>
        </div>
        
        <Tabs defaultValue="technical" className="w-full max-w-3xl mx-auto"
          value={activeTab} 
          onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="software" className="data-[state=active]:bg-accent">
              Software
            </TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-accent">
              Technical
            </TabsTrigger>
            <TabsTrigger value="soft" className="data-[state=active]:bg-accent">
              Soft Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software" className="space-y-6 animate-fade-in">
            {softwareSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" />
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="technical" className="space-y-6 animate-fade-in">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" />
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-center">
              {softSkills.map((skill, index) => (
                <Badge key={index} className="bg-card border-accent/30 text-white px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
