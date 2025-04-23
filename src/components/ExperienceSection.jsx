
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceItem = ({ year, title, company, description, technologies, isLeft = true }) => {
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
      year: "2025",
      title: "Intern",
      company: "National Aeronautics Laboratory",
      description: "Interned at National Aerospace Laboratories (NAL), where I gained hands-on experience with OpenVSP, Gmsh, and aircraft simulation tools. This internship deepened my understanding of aerodynamic modeling, mesh generation, and simulation workflows used in aircraft design and analysis.",
      technologies: ["OpenVSP", "GMesh", "SU2", "Analysis"]
    },
    {
      year: "2024",
      title: "UAV Co-Pilot",
      company: "Vimanna Labs India Pvt Ltd",
      description: "I gained practical experience in drone co-piloting for agricultural applications in Alappuzha, Kerala, with a focus on precision fertilizer spraying. This hands-on role enhanced my UAV operational skills and gave me valuable insight into the transformative role of drones in modern agriculture.",
      technologies: ["Co-Pilot", "UAV Pre-FLight Checks", "Mapping"]
    },
    {
      year: "2023",
      title: "Facilitator",
      company: "Vaayusastraa",
      description: "Served as a facilitator at Vaayusastra Aerospace, where I taught students the fundamentals and applications of drones (UAVs). Covered topics such as drone components, flight principles, real-world applications, and basic safety measures, helping learners gain both theoretical knowledge and practical insights into drone technology.",
      technologies: ["Aircraft Inspection", "Aircraft Miantanence"]
    },
    {
      year: "2023",
      title: "Trainee",
      company: "Agni Aero Sports Pvt Ltd",
      description: "Gained hands-on experience in microlight aircraft maintenance at Agni Aero Sports and Adventures, performing essential checks and learning key safety protocols, which strengthened my technical skills in real-world aviation settings.",
      technologies: ["Aircraft Inspection", "Aircraft Miantanence"]
    },
    {
      year: "2023",
      title: "In-Plant Trainee",
      company: "Vimanna Labs India Pvt Ltd",
      description: "Completed in-depth training at Vimanna Labs on microlight aircraft maintenance and airport management, including pre-flight checks and aviation safety case studies, enhancing my knowledge of maintenance protocols and operational procedures.",
      technologies: ["Airline and Airport Management", "Aviation", "Management"]
    },
    {
      year: "2022",
      title: "In-Plant Trainee",
      company: "CETAT, Bosch",
      description: "Underwent training at CETAT, PMIST, focusing on industrial automation systems. Gained practical knowledge in pneumatics, hydraulics, and Programmable Logic Controllers (PLC), enhancing my understanding of automated control processes used in modern industries.",
      technologies: ["Hydraulics", "Pneumatics", "PLC", "Sensors"]
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
