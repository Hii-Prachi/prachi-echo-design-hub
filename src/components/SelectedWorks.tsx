
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SelectedWorks = () => {
  const projects = [
    {
      title: "Learning Experience Platform",
      type: "UX Design & Research",
      image: "🎓",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "Product Design System", 
      type: "Design Systems",
      image: "💻",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Facilitation Workshop",
      type: "Program Management", 
      image: "🎯",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "Creative Zines",
      type: "Illustration & Publishing",
      image: "🎨", 
      color: "bg-pink-50 hover:bg-pink-100"
    },
    {
      title: "Digital Communication Strategy",
      type: "Communications",
      image: "📱",
      color: "bg-orange-50 hover:bg-orange-100"
    },
    {
      title: "Community Workshop Series",
      type: "Facilitation",
      image: "👥",
      color: "bg-teal-50 hover:bg-teal-100"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer animate-fade-in border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${project.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => console.log(`Clicked on ${project.title}`)}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] flex flex-col justify-center items-center text-center p-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <p className="text-xs font-inter font-medium text-coral-600 tracking-wider uppercase mb-2">
                    {project.type}
                  </p>
                  <h3 className="font-playfair text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
