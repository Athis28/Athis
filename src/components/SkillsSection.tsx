
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");
  
  const technicalSkills = [
    { name: "Propulsion Systems", level: 95 },
    { name: "Aerodynamic Analysis", level: 90 },
    { name: "Fluid Dynamics", level: 88 },
    { name: "Structural Analysis", level: 85 },
    { name: "Heat Transfer", level: 82 },
    { name: "Systems Engineering", level: 78 }
  ];
  
  const softwareSkills = [
    { name: "ANSYS CFD", level: 92 },
    { name: "MATLAB", level: 90 },
    { name: "SolidWorks", level: 85 },
    { name: "Python", level: 80 },
    { name: "Abaqus FEA", level: 75 },
    { name: "LabVIEW", level: 70 }
  ];
  
  const softSkills = [
    "Team Leadership", 
    "Project Management", 
    "Technical Writing", 
    "Public Speaking", 
    "Problem Solving",
    "Critical Thinking", 
    "Communication", 
    "Collaboration"
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
            <TabsTrigger value="technical" className="data-[state=active]:bg-accent">
              Technical
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-accent">
              Software
            </TabsTrigger>
            <TabsTrigger value="soft" className="data-[state=active]:bg-accent">
              Soft Skills
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="space-y-6 animate-fade-in">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" 
                  indicatorClassName="bg-accent" />
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="software" className="space-y-6 animate-fade-in">
            {softwareSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" 
                  indicatorClassName="bg-accent" />
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
