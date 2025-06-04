
import React from 'react';

const SelectedWorks = () => {
  const projects = [
    {
      title: "Learning Experience Platform",
      type: "UX Design & Research",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Designing intuitive learning experiences"
    },
    {
      title: "Product Design System",
      type: "Design Systems",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Scalable design components"
    },
    {
      title: "Facilitation Workshop",
      type: "Program Management",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Leading collaborative sessions"
    },
    {
      title: "Creative Zines",
      type: "Illustration & Publishing",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      description: "Handmade zines and illustrations"
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair italic text-4xl mb-4">Selected Works</h2>
          <button className="font-inter font-medium text-sm tracking-wider hover:text-coral-600 transition-colors border-b border-gray-300 hover:border-coral-600 pb-1">
            GO TO ALL PROJECTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-coral-600/0 group-hover:bg-coral-600/10 transition-colors duration-300"></div>
              </div>
              <div>
                <p className="text-xs font-inter font-medium text-coral-600 tracking-wider uppercase mb-1">
                  {project.type}
                </p>
                <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                <p className="font-inter text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
