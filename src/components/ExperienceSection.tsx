
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceProps = {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  isLeft?: boolean;
};

const ExperienceItem = ({ year, title, company, description, technologies, isLeft = true }: ExperienceProps) => {
  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 mb-8`}>
      <div className="md:w-1/4 flex justify-center md:justify-end items-center">
        <div className="bg-accent/20 text-accent px-4 py-2 rounded-md font-mono font-bold">
          {year}
        </div>
      </div>
      
      <div className="md:w-3/4">
        <Card className="card-gradient border-white/10 overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
            <p className="text-accent mb-3">{company}</p>
            <p className="text-white/70 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-accent/50 text-white/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2021 - Present",
      title: "Lead Propulsion Engineer",
      company: "SpaceX Aerospace",
      description: "Leading a team of engineers in the development of next-generation rocket propulsion systems, focusing on sustainable and reusable technologies.",
      technologies: ["Propulsion", "Systems Engineering", "Team Leadership", "Sustainable Design"]
    },
    {
      year: "2017 - 2021",
      title: "Senior Aerodynamics Specialist",
      company: "Boeing Advanced Research",
      description: "Conducted advanced research in computational fluid dynamics to optimize aircraft wing designs, resulting in 8% improvement in fuel efficiency.",
      technologies: ["CFD", "Aerodynamics", "MATLAB", "Wind Tunnel Testing"]
    },
    {
      year: "2014 - 2017",
      title: "Aerospace Engineer",
      company: "NASA Propulsion Laboratory",
      description: "Contributed to the development of ion propulsion systems for deep space missions, performing simulations and experimental testing.",
      technologies: ["Ion Propulsion", "Experimental Design", "Data Analysis", "Python"]
    },
    {
      year: "2012 - 2014",
      title: "Research Associate",
      company: "MIT Aerospace Department",
      description: "Conducted research on hypersonic flight technologies and authored papers on advanced materials for extreme flight conditions.",
      technologies: ["Research", "Materials Science", "Academic Publishing", "Hypersonics"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-space-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey in aerospace</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-accent/30 -translate-x-1/2" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              technologies={exp.technologies}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
