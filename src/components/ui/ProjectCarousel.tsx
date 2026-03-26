import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Play, Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative w-full bg-[#2a2b2e] rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col justify-between shadow-2xl border border-white/5 h-[650px] lg:h-[700px]">
          
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />
          
          {/* Header Text */}
          <div className="text-center relative z-20 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">Our Works</h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base">Discover Our Most Recent Project Highlights</p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center lg:justify-start">
            {projects.map((p, idx) => {
              let offset = idx - activeIndex;

              // Handle wrap-around math to make it totally infinite and seamless across edges
              if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
              if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

              const isActive = offset === 0;

              // Class configurations based on position
              let positionClasses = 'opacity-0 scale-50 z-0 translate-x-[150%] pointer-events-none blur-sm';
              
              if (isActive) {
                positionClasses = 'opacity-100 scale-100 z-30 translate-x-0 lg:translate-x-0 drop-shadow-2xl';
              } else if (offset === 1) {
                positionClasses = 'opacity-60 scale-[0.85] z-20 translate-x-[20%] sm:translate-x-[30%] lg:translate-x-[40%] cursor-pointer hover:opacity-80 hover:scale-[0.87] saturate-50 brightness-75';
              } else if (offset === 2) {
                positionClasses = 'opacity-30 scale-[0.70] z-10 translate-x-[40%] sm:translate-x-[60%] lg:translate-x-[80%] cursor-pointer hover:opacity-50 saturate-0 brightness-50 blur-[2px]';
              } else if (offset < 0) {
                 positionClasses = 'opacity-0 scale-75 z-0 -translate-x-full pointer-events-none';
              }

              return (
                <div 
                  key={p.title}
                  onClick={() => { if (offset > 0) setActiveIndex(idx); }}
                  className={`absolute left-0 lg:left-8 w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${positionClasses}`}
                >
                  {/* Image Fill Window */}
                  <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative bg-black/80 border border-white/10 group">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* Inactive Overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/60 transition-colors duration-300" />
                    )}

                    {/* Active Hover Overlay -> Read More */}
                    {isActive && (
                      <div 
                        onClick={() => setSelectedProject(p)}
                        className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer"
                      >
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                          <Button variant="hero" size="lg" className="rounded-full shadow-xl shadow-primary/30 flex items-center gap-2">
                             <Info className="w-5 h-5" /> Read More
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows at bottom right corner */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-40 flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/30 hover:border-primary flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-sm"
              aria-label="Previous project"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="Next project"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in shadow-2xl">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-5xl bg-[#1a1b1e] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 animate-slide-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/90 text-white rounded-full transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Project Image Left Side */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-64 md:h-auto bg-black border-r border-white/5 relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a1b1e] to-transparent pointer-events-none" />
            </div>

            {/* Project Content Right Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">
                {selectedProject.client}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-10">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs font-semibold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-8">
                {selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? (
                  <Button asChild size="xl" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 border-none gap-2 font-semibold">
                    <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" /> Visit Live Site
                    </a>
                  </Button>
                ) : (
                  <Button disabled size="xl" className="flex-1 bg-white/5 text-gray-500 rounded-xl border-none cursor-not-allowed gap-2">
                     Currently In Development
                  </Button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
