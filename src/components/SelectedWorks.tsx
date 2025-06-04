
import React from 'react';

const SelectedWorks = () => {
  const projects = [
    {
      title: "Learning Experience Platform",
      type: "UX Design & Research",
      emoji: "📚",
      description: "Designing intuitive learning experiences for educators and students"
    },
    {
      title: "Product Design System", 
      type: "Design Systems",
      emoji: "💻",
      description: "Scalable design components and guidelines for consistent user experiences"
    },
    {
      title: "Facilitation Workshop",
      type: "Program Management", 
      emoji: "🎯",
      description: "Leading collaborative sessions and managing cross-functional teams"
    },
    {
      title: "Creative Zines",
      type: "Illustration & Publishing",
      emoji: "🎨", 
      description: "Handmade zines combining illustration, typography, and storytelling"
    },
    {
      title: "Digital Communication Strategy",
      type: "Communications",
      emoji: "📱",
      description: "Developing cohesive brand messaging across digital platforms"
    },
    {
      title: "Community Workshop Series",
      type: "Facilitation",
      emoji: "👥",
      description: "Designing and facilitating creative workshops for diverse audiences"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="text-4xl mb-3">{project.emoji}</div>
                <p className="text-xs font-inter font-medium text-coral-600 tracking-wider uppercase mb-2">
                  {project.type}
                </p>
                <h3 className="font-playfair text-xl font-semibold mb-3">{project.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
