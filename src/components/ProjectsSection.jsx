
import { useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projects = [
  {
    id: 1,
    title: "AirTaxi Motion Simulation",
    description: "Developed a real-world AirTaxi simulation system with FPV, enabling synchronized motion-based pilot training using a scaled model with custom 3D printed casing.",
    image: "AirTaxi Project.png",
    tags: ["UAM", "Pilot Training", "FPV", "Simulation"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-space-deep-blue to-card">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <Card key={project.id} className="card-gradient border-accent/20 backdrop-blur-sm overflow-hidden hover:shadow-accent/10 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-space text-white">{project.title}</CardTitle>
                <CardDescription className="text-white/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        
        <div className="flex justify-center mt-10">
          <a href="#contact">
            <Button className="btn-primary">
              <Package className="mr-2 h-4 w-4" />
              Discuss a Project
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;